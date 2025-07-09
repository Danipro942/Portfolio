import { useTranslation } from "react-i18next";
import style from "./style.module.css";
import { IoIosSend } from "react-icons/io";
import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { EmailForm, EmailFormSchema } from "../../Schemas/emailForm";

import { toast } from "react-toastify";

import axios from "axios";

type Props = {};

const ContactMe = ({}: Props) => {
  const { t } = useTranslation("global");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EmailForm>({
    resolver: zodResolver(EmailFormSchema),
  });

  const onSubmit = async (data: EmailForm) => {
    await axios
      .put(`${import.meta.env.VITE_BACKEND_URL}/api/email/sendemail`, data)
      .then((response) => {
        console.log("Success:", response.data);
        toast.success(t("contactme.toast.email_successfuly"));
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error(t("contactme.toast.email_wrong"));
      });
  };

  return (
    <section id="contactme" className={style.contactme}>
      <div className={`${style.contactmeContent} container`}>
        <div className={style.title} data-aos="fade-down">
          <h2>{t("contactme.title.main")}</h2>
          <p>{t("contactme.title.description")}</p>
        </div>

        <div className={style.formContact}>
          <div
            data-aos-delay="300"
            className={style.form}
            data-aos="fade-right"
          >
            <form action="" onSubmit={handleSubmit(onSubmit)}>
              <label htmlFor="">{t("contactme.form.name_label")}</label>
              <input
                className={errors.name ? "errorField" : ""}
                {...register("name")}
                type="text"
                placeholder={t("contactme.form.name_placeholder")}
              />

              <label htmlFor="">{t("contactme.form.subject_label")}</label>
              <input
                className={errors.subject ? "errorField" : ""}
                {...register("subject")}
                type="text"
                placeholder={t("contactme.form.subject_placeholder")}
              />

              <label htmlFor="">{t("contactme.form.email_label")}</label>
              <input
                className={errors.email ? "errorField" : ""}
                {...register("email")}
                type="text"
                placeholder={t("contactme.form.email_placeholder")}
              />

              <label htmlFor="">{t("contactme.form.message_label")}</label>
              <textarea
                className={errors.message ? "errorField" : ""}
                {...register("message")}
                name="message"
                id="message"
                placeholder={t("contactme.form.message_label")}
              ></textarea>

              <button type="submit">
                <i>
                  <IoIosSend />
                </i>
                {t("contactme.form.send_button")}
              </button>
            </form>
          </div>

          <div
            className={style.socialmedia}
            data-aos="fade-left"
            data-aos-delay="500"
          >
            <div>
              <h2>{t("contactme.social_media.connect_title")}</h2>
              <span>{t("contactme.social_media.platform_prompt")}</span>
            </div>
            <div className={style.contactSocialMedia}>
              <div
                onClick={() =>
                  window.open(
                    "https://x.com/DanistTH",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
                className={style.platform}
              >
                <div className={style.icon}>
                  <i>
                    <RiTwitterXFill />
                  </i>
                </div>
                <span>{t("contactme.social_media.twitter")}</span>
              </div>

              <div
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/daniel-hinestroza-mina/",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
                className={style.platform}
              >
                <div className={style.icon}>
                  <i>
                    <FaLinkedin />
                  </i>
                </div>
                <span>{t("contactme.social_media.linkedin")}</span>
              </div>

              <div
                onClick={() =>
                  window.open(
                    "https://github.com/Danipro942",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
                className={style.platform}
              >
                <div className={style.icon}>
                  <i>
                    <FaGithub />
                  </i>
                </div>
                <span>{t("contactme.social_media.github")}</span>
              </div>
            </div>
            <span className={style.myemail}>
              {t("contactme.social_media.email_prompt")} <br />{" "}
              <p>{t("contactme.social_media.email_address")}</p>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
