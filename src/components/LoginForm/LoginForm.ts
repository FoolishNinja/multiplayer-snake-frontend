import { Component, Vue } from 'vue-property-decorator';
import Alert from '@/components/Alert/Alert.vue';
import SocketService from '@/services/SocketService';

@Component({
    name: 'LoginForm',
    components: {
        Alert
    }
})
export default class LoginForm extends Vue {
    private username = '';
    private password = '';



    private async login() {
        if (this.username.length === 0 || this.password.length === 0) {
            this.$refs.alert.setErrorMessage('Please enter a username and a password');
            return;
        }
        const socketService: SocketService = this.$store.getters.getSocketService;
        socketService.emit('login', { username: this.username, password: this.password }, response => {
            if (response.statusCode === 200) {
                localStorage.setItem('auth_token', response.message);
                this.$router.push('/game');
                return;
            }
            this.$refs.alert.setErrorMessage(response.message);
        })
    }

    private redirectToRegister() {
        this.$router.push('/register');
    }
}