import React from "react";
import styles from "../../styles/ui/get-now-btn.module.css";
import { useRouter } from "next/router";
import Link from "next/link";

const GetNowBtn = ({ service, plan, sub_plan }) => {
  const router = useRouter();

  return (
    <div className={styles.button_wrapper}>
      <Link
        href={{
          hash: "#connect",
          pathname: "/",
          query: { service, plan, sub_plan: sub_plan ?? "" },
        }}
        className={styles.button}
      >
        Get Now
      </Link>
    </div>
  );
};

export default GetNowBtn;
