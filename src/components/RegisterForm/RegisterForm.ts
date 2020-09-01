import { Component, Vue } from 'vue-property-decorator';
import Alert from '@/components/Alert/Alert.vue';
import SocketService from '@/services/SocketService';

@Component({
    name: 'RegisterForm',
    components: {
        Alert
    }
})
export default class RegisterForm extends Vue {
    private email = '';
    private username = '';
    private password = '';



    private async register() {
        if (this.username.length === 0 || this.password.length === 0 || this.email.length === 0) {
            this.$refs.alert.setErrorMessage('Please enter an email, username and a password');
            return;
        }
        const socketService: SocketService = this.$store.getters.getSocketService;
        socketService.emit('register', { email: this.email, username: this.username, password: this.password }, response => {
            console.log(response);
            if (response.statusCode === 200) {
                this.$refs.alert.setSuccessMessage('Successfully registered. Now redirecting...');
                setTimeout(() => this.$router.push('/login'), 2000);
                return;
            }
            this.$refs.alert.setErrorMessage(response.message);
        })
    }

    private redirectToLogin() {
        this.$router.push('/login');
    }
}