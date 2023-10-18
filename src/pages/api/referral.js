import { generateRandomReferralCode } from "@/utils/generateReferralCode";

const users = [];

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { data } = req.body;

    if (data?.fullname && data?.email) {
      const isUserExists = users.some((user) => user.email === data?.email);

      if (isUserExists) {
        const existingUser = users.find((user) => user.email === data?.email);
        res.status(200).json({ referralCode: existingUser?.referralCode });
      } else {
        const referral_code = generateRandomReferralCode();
        console.log("Referral Code: ", referral_code);

        const newUser = {
          fullname: data?.fullname,
          email: data?.email,
          referralCode: referral_code,
        };

        users.push(newUser);

        res.status(200).json({
          referralCode: referral_code,
          // userStatus: isUserExists,
        });
      }
    } else {
      res
        .status(400)
        .json({ message: "User details are required", data: data });
    }
  } else {
    res.status(400).json({ message: "Bad request" });
  }
}
