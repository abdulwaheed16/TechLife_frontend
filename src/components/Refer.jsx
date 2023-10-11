import React from "react";
import styles from "../styles/Home.module.css";
import ReferalForm from "./Referal-Form";

const Refer = () => {
  const discounts = [
    {
      off_percent: "10",
      refer_counts: "1-3",
    },
    {
      off_percent: "15",
      refer_counts: "4-8",
    },
    {
      off_percent: "20",
      refer_counts: "9 and above",
    },
  ];
  return (
    <div className={styles.refer_section}>
      <div className={styles.refer}>
        <h2>Refer to someone and get more discount</h2>
        <p className={styles.referal_bonus}>
          Referring us is not just a gesture; it's a partnership. Help us reach
          new heights by introducing our services to others, and earn a generous
          referral bonus for every successful referral.
        </p>
        <p className={styles.referal_bonus}>
          Your referees will get an additional{" "}
          <span style={{ color: "yellow" }}>15%</span> discount on being
          referred by you.
        </p>
        <div className={styles.discount_offers}>
          {discounts.map((discount, index) => (
            <p className={styles.discount_offer} key={index}>
              <span className={styles.off_percent}>
                {discount.off_percent}% OFF
              </span>
              <span className={styles.refer_count}>
                {discount.refer_counts} Referees
              </span>
            </p>
          ))}
        </div>
        {/* <button> Get Discount </button> */}
        <div className={styles.referal_form}>
          <ReferalForm />
        </div>
      </div>
    </div>
  );
};

export default Refer;
