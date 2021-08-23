import axios from 'axios';

const API_TOKEN = '1898954081:AAEu4Dl6bGruT1CHzOdTalx_lAaHb9fJ_60';
const CHAT_ID = '391676';

function requestTelegram(positionName, newLocation) {
  const messageText = `⚠️ измени пожалуйста склад хранения для ${positionName} на ${newLocation}`
  axios(
    `https://api.telegram.org/bot${API_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${messageText}&parse_mode=HTML`,
  );
}

export default requestTelegram;
