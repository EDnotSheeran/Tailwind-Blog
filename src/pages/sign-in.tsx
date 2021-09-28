import React, { useRef } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { UserIcon, LockClosedIcon, MailIcon } from '@heroicons/react/solid';
import { classNames } from '@lib/utils';

const SignIn: NextPage = ({ children }) => {
  const [page, setPage] = React.useState<'SignIn' | 'SignUp'>('SignIn');
  const router = useRouter();
  const transitioned = useRef<HTMLDivElement>(null);

  const signInFormAction: React.FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();
    setPage('SignUp');
  };

  const signUnFormAction: React.FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();
    setPage('SignIn');
  };

  const signInButtonClick: React.MouseEventHandler<HTMLButtonElement> = e => {
    setPage('SignIn');
    transitioned.current!.ontransitionend = e => {
      if (
        (e.target as HTMLDivElement).id === 'sign' &&
        e.propertyName === 'transform'
      )
        router.push('sign-in');
    };
  };

  const signUpButtonClick: React.MouseEventHandler<HTMLButtonElement> = e => {
    setPage('SignUp');
    transitioned.current!.ontransitionend = e => {
      if (
        (e.target as HTMLDivElement).id === 'sign' &&
        e.propertyName === 'transform'
      )
        router.push('sign-up');
    };
  };

  return (
    <>
      <div
        ref={transitioned}
        className={classNames(
          'relative w-full min-h-screen overflow-hidden',
          'before:absolute before:w-screen-2 before:h-screen-w2 before:left-1/2 before:-translate-x-1/2 before:bottom-72/100 before:rounded-50 before:bg-gradient-to-t before:from-blue-500 before:bg-blue-600 before:z-11 before:duration-1600 before:ease-in-out',
          page === 'SignUp'
            ? 'before:translate-y-full before:bottom-28/100'
            : '',
          'sm:before:left-30/100 sm:before:bottom-68/100 sm:before:duration-2000',
          page === 'SignUp' ? 'sm:before:bottom-32/100' : '',
          'lg:before:-top-1/10 lg:before:right-48/100 lg:before:left-initial lg:before:bottom-initial lg:before:-translate-y-1/2 lg:before:duration-1800',
          page === 'SignUp'
            ? 'lg:before:right-52/100 lg:before:translate-x-full'
            : 'lg:before:translate-x-0'
        )}
      >
        {/* Forms */}
        <div className="absolute w-full h-full top-0 left-0">
          <div
            id="sign"
            className={classNames(
              'absolute transform w-full top-95/100 left-1/2 -translate-x-1/2 -translate-y-full grid grid-cols-1 z-10 duration-1000 delay-1000 ease-in-out',
              page === 'SignIn'
                ? 'lg:-translate-x-1/4 lg:left-3/4'
                : 'top-5/100 left-1/2 -translate-x-1/2 -translate-y-0 lg:-translate-x-3/4 lg:left-1/4',
              'lg:w-max lg:top-1/2 lg:-translate-y-1/2'
            )}
          >
            {/* SignIn Form */}
            <form
              id="sign-in"
              onSubmit={signInFormAction}
              className={classNames(
                'flex items-center justify-center flex-col px-6 sm:px-0 col-start-1 col-end-2 row-start-1 row-end-2 duration-200 delay-700 ease-in-out',
                page === 'SignIn' ? 'z-10' : 'z-0 opacity-0'
              )}
            >
              <h2 className="text-4xl text-gray-500 font-bold my-5">Sign in</h2>
              <div className="max-w-sm w-full h-14 bg-gray-100 mx-2 rounded-full grid grid-cols-15-85 mb-5">
                <MailIcon className="w-6 place-self-center text-gray-500" />
                <input
                  className="bg-transparent border-0 text-lg font-semibold text-gray-800"
                  type="text"
                  placeholder="E-mail"
                />
              </div>
              <div className="max-w-sm w-full h-14 bg-gray-100 mx-2 rounded-full grid grid-cols-15-85 mb-5">
                <LockClosedIcon className="w-6 place-self-center text-gray-500" />
                <input
                  className="bg-transparent border-0 text-lg font-semibold text-gray-800"
                  type="text"
                  placeholder="Password"
                />
              </div>
              <button className="w-36 h-12 text-lg rounded-full text-white font-semibold mt-2 duration-500 bg-blue-500 hover:bg-blue-600">
                Login
              </button>
              <a href="#" className="text-gray-500 hover:text-blue-400 my-3">
                Forgot password?
              </a>
            </form>
            {/* SignUp Form */}
            <form
              id="sign-up"
              onSubmit={signUnFormAction}
              className={classNames(
                'flex items-center justify-center flex-col px-6 sm:px-0 col-start-1 col-end-2 row-start-1 row-end-2 duration-200 delay-700 ease-in-out',
                page === 'SignUp' ? 'z-10' : 'z-0 opacity-0'
              )}
            >
              <h2 className="text-4xl text-gray-500 font-bold my-5">Sign up</h2>
              <div className="max-w-sm w-full h-14 bg-gray-100 mx-2 rounded-full grid grid-cols-15-85 mb-5">
                <UserIcon className="w-6 place-self-center text-gray-500" />
                <input
                  className="bg-transparent border-0 text-lg font-semibold text-gray-800"
                  type="text"
                  placeholder="Username"
                />
              </div>
              <div className="max-w-sm w-full h-14 bg-gray-100 mx-2 rounded-full grid grid-cols-15-85 mb-5">
                <MailIcon className="w-6 place-self-center text-gray-500" />
                <input
                  className="bg-transparent border-0 text-lg font-semibold text-gray-800"
                  type="text"
                  placeholder="E-mail"
                />
              </div>
              <div className="max-w-sm w-full h-14 bg-gray-100 mx-2 rounded-full grid grid-cols-15-85 mb-5">
                <LockClosedIcon className="w-6 place-self-center text-gray-500" />
                <input
                  className="bg-transparent border-0 text-lg font-semibold text-gray-800"
                  type="text"
                  placeholder="Password"
                />
              </div>
              <button className="w-36 h-12 text-lg rounded-full text-white font-semibold mt-2 duration-500 bg-blue-500 hover:bg-blue-600">
                Login
              </button>
              <a href="#" className="text-gray-500 hover:text-blue-400 my-3">
                Forgot password?
              </a>
            </form>
          </div>
        </div>
        {/* Panels */}
        <div className="absolute w-full h-full top-0 left-0 grid grid-cols-1 grid-rows-1-2-1 lg:grid-rows-none lg:grid-cols-2">
          {/* SignIn Panel  */}
          <div
            className={classNames(
              'row-1-2 lg:row-auto flex flex-row items-center justify-around text-center px-8/100 py-10 pt-12 pb-8 z-20',
              page === 'SignIn' ? 'pointer-events-auto' : 'pointer-events-none',
              'lg:flex-col lg:items-end lg:pr-17/100 lg:pl-12/100'
            )}
          >
            <div
              className={classNames(
                'text-white transform duration-1100 ease-in-out delay-500',
                page === 'SignIn'
                  ? ''
                  : 'translate-x-0 lg:-translate-x-120 -translate-y-120 lg:translate-y-0',
                'sm:pr-12/100 lg:pr-0'
              )}
            >
              <h3 className="font-semibold text-lg lg:text-2xl">New here ?</h3>
              <p className="py-3 text-sm lg:text-base">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas
                obcaecati alias incidunt aliquam, quod aliquid nisi temporibus
                velit nulla deserunt veniam eos dicta pariatur ipsum ipsam
                eveniet! Non, cupiditate exercitationem.
              </p>
              <button
                onClick={signUpButtonClick}
                className={classNames(
                  'bg-transparent m-0 border-2 border-white rounded-full w-24 h-8 text-xs font-semibold grid place-content-center mx-auto',
                  'lg:w-32 lg:h-10 lg:text-base'
                )}
              >
                Sign up
              </button>
            </div>
            <div
              className={classNames(
                'w-full min-w-50 duration-1100 ease-in-out delay-300 hidden',
                page === 'SignIn'
                  ? ''
                  : 'transform translate-x-0 lg:-translate-x-120 -translate-y-80 lg:translate-y-0',
                'sm:block'
              )}
            >
              <Image
                src="/img/step_to_the_sun.svg"
                alt="Login"
                layout="responsive"
                width={869.99994}
                height={520.13854}
              />
            </div>
          </div>
          {/* SignUp Panel  */}
          <div
            className={classNames(
              'row-3-4 lg:row-auto flex flex-row items-center justify-around text-center px-8/100 py-10 pt-12 pb-8 z-20',
              page === 'SignUp' ? 'pointer-events-auto' : 'pointer-events-none',
              'lg:flex-col lg:items-end lg:pr-12/100 lg:pl-17/100'
            )}
          >
            <div
              className={classNames(
                'text-white transform duration-1100 ease-in-out delay-500',
                page === 'SignUp'
                  ? ''
                  : 'translate-x-0 lg:translate-x-120 translate-y-120 lg:translate-y-0',
                'sm:pr-12/100 lg:pr-0'
              )}
            >
              <h3 className="font-semibold text-lg lg:text-2xl">One of us ?</h3>
              <p className="py-3 text-sm lg:text-base">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas
                obcaecati alias incidunt aliquam, quod aliquid nisi temporibus
                velit nulla deserunt veniam eos dicta pariatur ipsum ipsam
                eveniet! Non, cupiditate exercitationem.
              </p>
              <button
                onClick={signInButtonClick}
                className={classNames(
                  'bg-transparent m-0 border-2 border-white rounded-full w-24 h-8 text-xs font-semibold grid place-content-center mx-auto',
                  'lg:w-32 lg:h-10 lg:text-base'
                )}
              >
                Sign in
              </button>
            </div>
            <div
              className={classNames(
                'w-full min-w-50 duration-1100 ease-in-out delay-300 transform hidden',
                page === 'SignUp'
                  ? ''
                  : 'translate-x-0  lg:translate-x-120 translate-y-80 lg:translate-y-0',
                'sm:block'
              )}
            >
              <Image
                src="/img/Welcome.svg"
                alt="Login"
                layout="responsive"
                width={869.99994}
                height={520.13854}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

SignIn.getLayout = page => page;

export default SignIn;

type InputProps = {
  id: string;
  label: string;
  type: string;
};

const Input: React.FC<InputProps> = ({ id, label, type }) => {
  const [filled, setFilled] = React.useState(false);
  const [focused, setFocused] = React.useState(false);

  const onKeyUp = (e: any) => {
    const input = e.target as HTMLInputElement;
    if (input.value) {
      setFilled(true);
    } else {
      setFilled(false);
    }
  };

  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);

  return (
    <div
      className="relative w-full border-2 border-b-0 first:rounded-tl-md first:rounded-tr-md last:rounded-bl-md last:rounded-br-md overflow-hidden"
      onKeyUp={onKeyUp}
    >
      <label
        className={classNames(
          'absolute duration-300 text-gray-400',
          filled || focused ? 'text-sm top-1 left-3' : 'text-lg top-1/4 left-5'
        )}
      >
        {label}
      </label>
      <input
        onFocus={onFocus}
        onBlur={onBlur}
        type={type}
        className="w-full border-none p-3 pt-5 text-lg"
      />
    </div>
  );
};

const Backdrop: React.FC = ({ children }) => {
  return (
    <div
      style={{
        width: '160%',
        height: '550px',
        top: '-290px',
        left: '-70px',
        background:
          'linear-gradient(58deg, rbga(241, 196, 15, 1) 20%, rgba(243, 172, 18, 1) 100%)',
      }}
      className="absolute flex flex-col rounded-full transform rotate-45 bg-yellow-500"
    ></div>
  );
};

/*

--firts-color: #9d4bff;
--firts-color-dark: #23004d;
--firts-color-light: #a49eac;
--firts-color-lighten: #f2f2f2;
#7E63FF
*/
