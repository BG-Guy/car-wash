import { sendTestEmail } from "@/lib/mail";

export const testMailFn = async () => {
  console.log("TEST FN CLICKED");
  try {
    await sendTestEmail();
  } catch (error) {
    console.log("something went wrong", process.env.RESEND_API_KEY);
  } finally {
    console.log("SUCCESS", process.env.RESEND_API_KEY);
  }
};
