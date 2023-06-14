"use client"

import React from "react";

import Link from "next/link";

import { Divider } from "@components/Divider";
import { Button } from "@components/Button";
import { Input } from "@components/Input";

import { Apple, Google, Lock, Mail, Name } from "@icons";

import classes from "./Signup.module.scss";
import { useRouter } from "next/navigation";

export const Signup = () => {
  const router = useRouter();

  return (
    <div className={classes["sign_up_container"]}>
      <div className={classes["image_container"]}>
        <img className={classes["group"]} src="/Images/Sign_up_Cover.svg" />
      </div>

      <div className={classes["sign_up"]}>
        <div className={classes["frame_wrapper"]}>
          <div className={classes["frame_2"]}>
            <h1>Sign up</h1>

            <div className={classes["sign_up_form"]}>
              <div className={classes["frame_3"]}>
                <p className={classes["p"]}>Sign up with Open account</p>

                <div className={classes["frame_4"]}>
                  <Button
                    icon={<Google height={20} width={20} />}
                    size="medium"
                    style="secondary"
                  >
                    Google
                  </Button>
                  <Button
                    icon={<Apple height={20} width={20} />}
                    size="medium"
                    style="secondary"
                  >
                    Apple ID
                  </Button>
                </div>
              </div>

              <Divider direction="horizontal" size="small" variant="light" />

              <div className={classes["email"]}>
                <p className={classes["p"]}>Or continue with email address</p>

                <div className={classes["email_form"]}>
                  <Input
                    placeholder={"Full Name"}
                    icon={<Name height={20} width={20} color="red" />}
                  />

                  <Input
                    placeholder={"Email"}
                    icon={<Mail height={20} width={20} />}
                  />

                  <Input
                    type="password"
                    placeholder={"Password"}
                    icon={<Lock height={24} width={24} />}
                  />

                  <Button
                    size="medium"
                    style="primary"
                    width="100%"
                    onClick={() => router.push("/login")}
                  >
                    Continue
                  </Button>
                </div>
              </div>

              <p className={classes["don_t_have_an"]}>
                <span className={classes["span"]}>
                  Already a member?&nbsp;&nbsp;
                </span>
                <Link href={"/login"} className={classes["text_wrapper_4"]}>
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
