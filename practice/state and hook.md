import { useEffect, useState } from "react";

const [data, setData] = useState<any>("hello");

useEffect(() => {
console.log(
"I am always called when both state and component is updated, initialized, rendered"
);
console.log(data);
});

useEffect(() => {
setTimeout(() => {
setData("hi");
console.log("I am called only once when component is loaded");
}, 5000);
}, []);

useEffect(() => {
console.log("I am called only when my state is initialized and changed");
}, [data]);
