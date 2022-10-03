import { ThreeDots } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <ThreeDots
      height="40"
      width="40"
      radius="9"
      color="#4fa94d"
      ariaLabel="three-dots-loading"
      wrapperStyle={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      wrapperClassName=""
      visible={true}
    />
  );
};
