import { Component, Vue } from 'vue-property-decorator';
import LoginForm from '@/components/LoginForm/LoginForm.vue';

@Component({
    name: 'LoginView',
    components: {
        LoginForm
    }
})
export default class LoginView extends Vue {
}