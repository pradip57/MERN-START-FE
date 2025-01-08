import { useEffect, useState } from "react";
import LoadingComponent from "../../../components/common/loading/loading.components";
import { useNavigate, useParams } from "react-router-dom";
import authSvc from "../auth.service";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const ActivateAccount = () => {
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const navigate = useNavigate();

  const activateUserAccount = async () => {
    try {
      await authSvc.activateUser(params.token as string);
      toast.success(
        "Your account has been succesfully activated.Please login to continue"
      );
      navigate("/login");
    } catch (exception: any) {
      if (
        +exception.status === 400 &&
        exception.data.status === "ACTIVATION TOKEN EXPIRED"
      ) {
        Swal.fire({
          title: "Token Expired",
          text: "Your Token has been expired.Do you wish to resend the email?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Confirm",
        }).then(async (result) => {
          if (result.isConfirmed) {
            await authSvc.resendActivationToken(params.token as string);
            toast.success("A new token has been sent. Please Check your email");
          } else {
            navigate("/");
          }
        });
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    activateUserAccount();
  }, []);

  return <>{loading ? <LoadingComponent /> : <></>}</>;
};

export default ActivateAccount;
