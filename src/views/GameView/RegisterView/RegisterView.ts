import { Component, Vue } from 'vue-property-decorator';
import RegisterForm from '@/components/RegisterForm/RegisterForm.vue';

@Component({
    name: 'RegisterView',
    components: {
        RegisterForm
    }
})
export default class RegisterView extends Vue {
}