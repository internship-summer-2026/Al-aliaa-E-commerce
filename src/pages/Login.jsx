import { Mail } from "lucide-react";
import { FaFacebook } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
const Login = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    navigate("/")
  };
  return (
    <>
      <div className="header">
        <p className="mt-6 ">
          الرئيسية/ <span className="text-[#289D61]">تسجيل الدخول</span>
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="login-container bg-white width-[485px] height-[490px]">
          <h1 className="title text-black">تسجيل الدخول</h1>
          <input
            type="email"
            placeholder="البريد الالكتروني"
            {...register("email", {
              required: "البريد الالكتروني مطلوب",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "اكتب بريد الكتروني صحيح",
              },
            })}
            className="input-field mt-5 ml-auto mr-auto "
          />

          {errors.email && (
            <p className="text-red-500 text-sm mr-8 mt-2">{errors.email.message}</p>
          )}

          <input
            type="password"
            {...register("password", {
              required: "كلمة المرور مطلوبة",
              minLength: {
                value: 6,
                message: "كلمة المرور يجب ان تتكون من 6 احرف على الاقل",
              },
            })}
            placeholder="كلمة المرور"
            className="input-field mt-5 ml-auto mr-auto text-right "
          />

          {errors.password && (
            <p className="text-red-500 text-sm mr-8 mt2">{errors.password.message}</p>
          )}

          <div className="remember-me-container flex items-center  ml-auto mr-auto">
            <input type="checkbox" className="remember-me mt-5 mr-8.5 ml-2 " />

            <p className="mt-4 text-[#9D9D9D]">تذكرني</p>
            <p className="mt-4 mr-60 text-[#9D9D9D]">
              <a href="">نسيت كلمةالمرور</a>
            </p>
          </div>

          <button
            type="submit"
            className="login-button mt-5 ml-auto mr-auto bg-[#289D61] text-white "
          >
            تسجيل الدخول
          </button>

          <p className="mx-auto text-center mt-5 text-[#9D9D9D]">
            ليس لديك حساب؟{" "}
            <a className="text-[#289D61]" href="/register">
              انشاء حساب
            </a>
          </p>
          <div className="w-[85%] h-0.5 bg-[#9D9D9D] mx-auto mt-5"></div>
          <p className="other-ways mx-auto text-center mt-5">
            او تسجيل الدخول عن طريق
          </p>
          <div className="flex justify-center mt-5 gap-3">
            <Mail className="gmail-icon" />
            <FaFacebook className="gmail-icon" />
          </div>
        </div>
      </form>
    </>
  );
};

export default Login;
