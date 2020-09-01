import { Component, Vue } from 'vue-property-decorator';
import GameWindow from '@/components/GameWindow/GameWindow.vue';

@Component({
    name: 'GameView',
    components: {
        GameWindow
    }
})
export default class GameView extends Vue {

}