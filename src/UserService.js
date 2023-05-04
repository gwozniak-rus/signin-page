import axios from 'axios'

//const PutSpringRestUrl = 'http://localhost:8080/api/user';



class UserService {

    findCode() {
        return axios.put("http://localhost:8080/api/user/findCode", {
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify
        })
    }


    /*getCode() {
        return axios.put(PutSpringRestUrl, code);

    }
    findCode(code) {

        return axios.put(PutSpringRestUrl, {

            headers: {
                "code": code,
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Method': 'PUT,GET,POST,DELETE',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',

            }
        }
        );
    }*/
}
//export default new UserService();*/
