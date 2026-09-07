import { Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import { FaFacebook } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    navigate("/");
  };

  return (
    <>
      <div className="header">
        <p className="mt-6">
          الرئيسية/تسجيل الدخول/
          <span className="text-[#289D61]">انشاء حساب</span>
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="register-container">
          <h1 className="title text-black">انشاء حساب</h1>

          <div className="field-container flex justify-center items-center gap-4">
            <input
              type="text"
              placeholder="الاسم"
              {...register("firstName", {
                required: "الاسم مطلوب",
                minLength: {
                  value: 2,
                  message: "الاسم يجب ان يكون حرفين على الاقل",
                },
              })}
              className="input-register-field mt-5"
            />

            <input
              type="text"
              placeholder="اسم العائلة"
              {...register("lastName", {
                required: "اسم العائلة مطلوب",
                minLength: {
                  value: 2,
                  message: "الاسم يجب ان يكون حرفين على الاقل",
                },
              })}
              className="input-register-field mt-5"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 px-4">
            <div className="text-right">
              {errors.firstName && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.firstName.message}
                </p>
              )}
            </div>

            <div className="text-right">
              {errors.lastName && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>

          <div className="field-container flex justify-center items-center gap-4">
            <input
              type="password"
              placeholder="انشاء كلمة مرور "
              {...register("password", {
                required: "كلمة المرور مطلوبة",
                minLength: {
                  value: 6,
                  message: "كلمة المرور يجب ان تتكون من 6 احرف على الاقل",
                },
              })}
              className="input-register-field mt-5"
            />

            <input
              type="password"
              placeholder="تاكيد كلمةالمرور"
              {...register("confirmPassword", {
                required: "تاكيد كلمة المرور مطلوب",
                validate: (value) =>
                  value === watch("password") || "كلمة المرور غير متطابقة",
              })}
              className="input-register-field mt-5"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 px-4">
            <div className="text-right">
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="text-right">
              {errors.confirmPassword && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
          </div>

          <div className="field-container flex justify-center items-center gap-4">
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
              className="input-register-field mt-5"
            />

            <input
              type="tel"
              placeholder="رقم الهاتف"
              {...register("phone", {
                required: "رقم الهاتف مطلوب",
                pattern: {
                  value: /^01[0125][0-9]{8}$/,
                  message: "اكتب رقم هاتف صحيح",
                },
              })}
              className="input-register-field mt-5"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 px-4 ">
            <div className="text-right">
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="text-right">
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="register-button mt-5 ml-auto mr-auto"
          >
            انشاء حساب
          </button>

          <p className="mx-auto text-center mt-5 text-[#9D9D9D]">
            لديك حساب بالفعل.{" "}
            <a className="text-[#289D61]" href="/login">
              تسجيل الدخول
            </a>
          </p>

          <div className="w-[40%] h-0.5 bg-[#9D9D9D] mx-auto mt-5"></div>

          <p className="other-ways mx-auto text-center mt-3">
            او تسجيل الدخول عن طريق
          </p>

          <div className="flex justify-center mt-3 gap-3">
            <Mail className="gmail-icon" />
            <FaFacebook className="gmail-icon" />
          </div>
        </div>
      </form>
    </>
  );
};

export default Register;