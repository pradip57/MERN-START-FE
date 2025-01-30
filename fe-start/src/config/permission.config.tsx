import { useContext, useEffect, useState } from "react";
import LoadingComponent from "../components/common/loading/loading.components";
import AuthContext from "../context/auth.context";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const PermissionChecker = ({
  children,
  allowedBy,
}: {
  children: any;
  allowedBy: string;
}) => {
  const [loading, setLoading] = useState<boolean>(true);
  const auth: any = useContext(AuthContext);
  const navigate = useNavigate();

  const checkRolePermission = () => {
    if (auth.loggedInUser.role === allowedBy) {
      setLoading(false);
      console.log(auth);
    } else {
      setLoading(false);
      toast.warn("You do not have permission to access the module");

      navigate("/" + auth.loggedInUser.role);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("accesstoken") || null;
    if (token) {
      if (auth.loggedInUser) {
        checkRolePermission();
      }
    } else {
      toast.error("You have not logged In . Please Logged In First");
      navigate("/login");
    }
  }, [auth]);
  if (loading) {
    return (
      <>
        <LoadingComponent />
      </>
    );
  } else {
    {
      return <>{children}</>;
    }
  }
};

export default PermissionChecker;
