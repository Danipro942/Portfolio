import { useTranslation } from "react-i18next";
import style from "./style.module.css";
import { IoIosSend } from "react-icons/io";
import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

type Props = {};

const ContactMe = ({}: Props) => {
  const { t } = useTranslation("global");

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
            <form action="">
              <label htmlFor="">{t("contactme.form.name_label")}</label>
              <input
                type="text"
                placeholder={t("contactme.form.name_placeholder")}
              />

              <label htmlFor="">{t("contactme.form.email_label")}</label>
              <input
                type="text"
                placeholder={t("contactme.form.email_placeholder")}
              />

              <label htmlFor="">{t("contactme.form.message_label")}</label>
              <textarea
                name=""
                id=""
                placeholder={t("contactme.form.message_label")}
              ></textarea>
            </form>
            <button>
              <i>
                <IoIosSend />
              </i>
              {t("contactme.form.send_button")}
            </button>
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
              <div className={style.platform}>
                <div className={style.icon}>
                  <i>
                    <RiTwitterXFill />
                  </i>
                </div>
                <span>{t("contactme.social_media.twitter")}</span>
              </div>

              <div className={style.platform}>
                <div className={style.icon}>
                  <i>
                    <FaLinkedin />
                  </i>
                </div>
                <span>{t("contactme.social_media.linkedin")}</span>
              </div>

              <div className={style.platform}>
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
