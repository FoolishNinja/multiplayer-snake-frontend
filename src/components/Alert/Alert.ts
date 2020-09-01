import { Component, Vue } from 'vue-property-decorator';

@Component({
    name: 'Alert'
})
export default class Alert extends Vue {
    private errorMessage = '';
    private successMessage = '';
    private showSuccess = false;
    private showError = false;

    public setErrorMessage(msg: string) {
        this.errorMessage = msg;
        this.showError = true;
        setTimeout(() => this.showError = false, 2000);
    }
    
    public setSuccessMessage(msg: string) {
        this.successMessage = msg;
        this.showSuccess = true;
        setTimeout(() => this.showSuccess = false, 2000);
    }
}