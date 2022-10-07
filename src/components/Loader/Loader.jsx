import { ThreeDots } from 'react-loader-spinner';

export const Loader = ({ height = '40', color = '#4fa94d' }) => {
  return (
    <ThreeDots
      height={height}
      width="40"
      radius="9"
      color={color}
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
