import { GoogleLogin,  } from '@react-oauth/google';
const Google = () => {
    return (
        <div>
            <GoogleLogin
            locale='en-US'
            context='use'

            onSuccess={credentialResponse => {
                console.log(credentialResponse);
            }}
            onError={() => {
                console.log('Login Failed');
            }}
            useOneTap
            />
        </div>
    );
};
export default Google;