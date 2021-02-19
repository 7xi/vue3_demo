import { ref } from 'vue'
import { Toast } from 'vant'

const usePhotographClick = () => {
    const base64Img = ref("")
    // 点击显示图片
    const photograph = async () => {
        base64Img.value = 'https://www.somaqu.com/wp-content/uploads/2021/01/LaurelMoss_ZH-CN9578543974_1920x1080.jpg'
    }
    return { base64Img, photograph }
}

export default usePhotographClick
