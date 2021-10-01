import { $Node, $svg, attr } from "@aelea/dom"
import { ARBITRUM_ADDRESS, ARBITRUM_TRADEABLE_ADDRESS } from "gambit-middleware"


interface Icon {
  width?: number // in pixels
  height?: number // in pixels
  $content: $Node
  viewBox?: string
  fill?: string
}
const $path = $svg('path')


export const $icon = ({ $content, width = 24, height = width, viewBox = `0 0 ${width} ${height}`, fill = 'inherit' }: Icon) => (
  $svg('svg')(
    attr({ viewBox, width, height, fill }),
  )($content)
)

export const $logo = $svg('g')(
  $path(
    attr({
      d: 'M30.2 25.88h2.068c.404 0 .732.311.732.696 0 .385-.328.697-.732.697H1.732c-.404 0-.732-.312-.732-.697 0-.385.328-.697.732-.697h2.152c.865-1.25 1.778-2.109 2.642-2.921 1.594-1.5 3.02-2.84 3.66-6.189.639-3.348 2.064-4.689 3.658-6.189.864-.812 1.777-1.671 2.642-2.922L14.452 4.72a.451.451 0 01.14-.643.503.503 0 01.675.132l1.869 2.7 1.869-2.7a.503.503 0 01.676-.132c.225.14.287.429.139.643l-2.034 2.938s5.032 2.16 6.207 9.111c1.175 6.95 6.207 9.11 6.207 9.11zM26.783 4c-.223 0-.445.026-.66.077a.178.178 0 00-.138.141.171.171 0 00.083.175c.696.418 1.112 1.135 1.112 1.917 0 1.044-.743 1.948-1.806 2.198a.177.177 0 00-.136.142.171.171 0 00.083.175c.437.262.943.401 1.462.401 1.513 0 2.744-1.172 2.744-2.613 0-1.44-1.23-2.613-2.744-2.613zM7.35 10.471l-.565-.059-.357-.42a.125.125 0 00-.206.026l-.233.493-.53.193a.118.118 0 00-.076.087c-.008.04.006.08.038.108l.42.363.03.54c.002.04.026.077.063.096a.127.127 0 00.12-.002l.492-.268.548.14c.041.01.085 0 .116-.028a.112.112 0 00.035-.108l-.115-.529.309-.453a.111.111 0 00.008-.113.123.123 0 00-.097-.066zm3.21-3.408c.041.004.078.029.096.065a.111.111 0 01-.008.113l-.309.454.116.529a.113.113 0 01-.036.108.126.126 0 01-.115.028l-.548-.14-.493.268a.126.126 0 01-.119.001.116.116 0 01-.063-.096l-.03-.54-.42-.363a.113.113 0 01-.038-.107.118.118 0 01.076-.087l.53-.194.233-.493a.126.126 0 01.206-.026l.357.42.565.06zm-6.42 0l-.564-.06-.358-.419a.125.125 0 00-.206.025l-.233.493-.53.194a.118.118 0 00-.076.087c-.008.04.007.08.038.107l.42.364.03.54c.002.04.026.076.063.095a.125.125 0 00.12-.001l.492-.268.548.14c.041.01.085 0 .116-.028a.112.112 0 00.035-.108l-.115-.53.309-.453a.111.111 0 00.008-.113.122.122 0 00-.097-.065zM11.02 21.97c-.04-.033-.02-.128.044-.204l5.89-8.76c.04-.015.085-.001.116.037l.045.054c.016.02.108.16.158.239l5.528 8.274.103.152c.057.083.105.137.093.173-.023.073-.303.064-1.289.06l-1.145-.003-.03-.039a1.681 1.681 0 01-.065-.089l-.089-.132a37.257 37.257 0 01-.264-.398l-1.98-2.96a8.623 8.623 0 00-.238-.355l-.66-.988a3.174 3.174 0 00-.095-.146c-.073-.118-.086-.11-.242.134a6.67 6.67 0 01-.085.129l-2.006 2.991-.077.113-.053.078h.553c.464 0 .547.004.582-.035.012-.012.019-.03.032-.052.013-.022.027-.04.03-.04.005 0 .016-.017.024-.036a.235.235 0 01.033-.054l.866-1.293c.032-.049.065-.096.074-.106.008-.009.015-.02.015-.026 0-.005.01-.02.022-.034.012-.014.043-.06.07-.104.065-.103.087-.104.15-.007.026.04.058.084.07.098.011.014.021.032.021.041 0 .009.007.02.016.026l1.74 2.602c.004 0 .017.019.029.042a.255.255 0 00.028.047c.008.007.08.112.106.154.041.068.139.212.157.231.012.013.022.028.022.034 0 .006.014.027.03.047.038.046.053.107.03.122-.041.026-8.326.01-8.359-.017z',
      'fill-rule': 'evenodd',
      'clip-rule': 'evenodd',
    })
  )(),
)

export const $gmx = $path(
  attr({
    d: 'M1.163 26.401c-.162.194-.212.437-.11.522.082.068 20.794.11 20.897.043.058-.039.02-.194-.074-.31a.39.39 0 01-.076-.122c0-.015-.025-.053-.054-.085a7.702 7.702 0 01-.394-.59 5.145 5.145 0 00-.264-.394.633.633 0 01-.072-.122c-.028-.058-.06-.106-.073-.106l-4.349-6.65a.093.093 0 01-.039-.066c0-.023-.024-.07-.053-.105a3.373 3.373 0 01-.174-.25c-.159-.248-.213-.246-.374.018-.068.111-.148.23-.177.265-.03.035-.054.074-.054.087 0 .014-.018.044-.039.067a3.883 3.883 0 00-.185.271l-2.164 3.304a.61.61 0 00-.082.138c-.022.05-.048.09-.058.09-.01 0-.046.046-.077.103-.136.242 0 .222-1.536.222H10.2l.132-.198.193-.289 5.014-7.644c.076-.113.172-.261.214-.33.39-.625.421-.643.604-.343.033.054.07.112.083.13.013.018.083.128.154.244l1.65 2.525c.044.052.376.558.594.907l4.951 7.564a95.647 95.647 0 00.884 1.356c.047.072.12.174.16.228l.077.098 2.863.01c3.65.012 3.428.056 2.989-.596l-.256-.39L16.685 4.857c-.124-.204-.355-.56-.396-.61l-.112-.139c-.077-.096-.19-.133-.287-.093L1.162 26.401z',
  })
)()



export const $btc = $path(attr({ d: 'M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm7.189-17.98c.314-2.096-1.283-3.223-3.465-3.975l.708-2.84-1.728-.43-.69 2.765c-.454-.114-.92-.22-1.385-.326l.695-2.783L15.596 6l-.708 2.839c-.376-.086-.746-.17-1.104-.26l.002-.009-2.384-.595-.46 1.846s1.283.294 1.256.312c.7.175.826.638.805 1.006l-.806 3.235c.048.012.11.03.18.057l-.183-.045-1.13 4.532c-.086.212-.303.531-.793.41.018.025-1.256-.313-1.256-.313l-.858 1.978 2.25.561c.418.105.828.215 1.231.318l-.715 2.872 1.727.43.708-2.84c.472.127.93.245 1.378.357l-.706 2.828 1.728.43.715-2.866c2.948.558 5.164.333 6.097-2.333.752-2.146-.037-3.385-1.588-4.192 1.13-.26 1.98-1.003 2.207-2.538zm-3.95 5.538c-.533 2.147-4.148.986-5.32.695l.95-3.805c1.172.293 4.929.872 4.37 3.11zm.535-5.569c-.487 1.953-3.495.96-4.47.717l.86-3.45c.975.243 4.118.696 3.61 2.733z' }))()
export const $bnb = $path(attr({ d: 'M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-3.884-17.596L16 10.52l3.886 3.886 2.26-2.26L16 6l-6.144 6.144 2.26 2.26zM6 16l2.26 2.26L10.52 16l-2.26-2.26L6 16zm6.116 1.596l-2.263 2.257.003.003L16 26l6.146-6.146v-.001l-2.26-2.26L16 21.48l-3.884-3.884zM21.48 16l2.26 2.26L26 16l-2.26-2.26L21.48 16zm-3.188-.002h.001L16 13.706 14.305 15.4l-.195.195-.401.402-.004.003.004.003 2.29 2.291 2.294-2.293.001-.001-.002-.001z' }))()
export const $uni = $path(attr({ d: 'M16 32c8.837 0 16-7.163 16-16S24.837 0 16 0a15.932 15.932 0 00-9.9 3.43c2.572 3.002 6.641 7.78 7.061 8.29l.173.194-.016.319c-.015.432-.147.723-.445 1.015-.34.345-.77.529-1.438.626-.405.054-.547.124-.72.318-.156.184-.222.421-.263 1.004-.066.923-.172 1.296-.577 2.203-.39.88-.471 1.198-.405 1.673.076.556.38.977 1.083 1.49.537.388.785.637.917.944.076.195.091.265.091.583 0 .502-.076.697-.39 1.058-.511.589-1.438 1.058-2.562 1.339-.471.113-.496.113-.496 0 0-.135-.183-.513-.481-1.015-.355-.572-.497-.863-.628-1.311-.147-.503-.198-.837-.172-1.366.03-.497.08-.723.263-1.112.147-.324.238-.464.825-1.242 1.008-1.322 1.357-2.1 1.489-3.2.116-.988.273-1.463.628-1.879.212-.248.263-.345.263-.529 0-.08-.324-.766-1.331-2.672l-.019-.035C7.548 7.45 7.397 7.162 7.416 7.15c.003-.001.008.002.013.005.01.016.755 1.225 1.63 2.688 1.15 1.91 1.662 2.704 1.778 2.828.172.178.42.292.628.292.182 0 .562-.108.744-.222.324-.194.405-.459.208-.74-.201-.282-3.586-4.708-6.467-8.45A15.97 15.97 0 000 16c0 8.837 7.163 16 16 16zM8.457 21.404a.599.599 0 00-.172-.767c-.223-.15-.562-.08-.562.125 0 .053.025.113.106.14.117.07.132.14.04.291-.09.151-.09.292.026.389.182.156.43.07.562-.178zm4.168-14.261c-.274-.043-.289-.054-.157-.07.248-.044.825.016 1.23.113.942.237 1.788.847 2.69 1.922l.232.291.34-.054c1.448-.248 2.936-.054 4.182.556.34.167.876.502.942.583.025.027.066.21.091.389.091.653.05 1.144-.142 1.516-.106.211-.106.265-.04.449.05.14.207.237.354.237.314 0 .638-.529.795-1.268l.066-.292.117.14c.668.794 1.19 1.895 1.266 2.672l.025.21-.116-.183c-.198-.318-.38-.529-.628-.712-.446-.319-.917-.416-2.158-.486-1.124-.07-1.762-.167-2.39-.389-1.073-.378-1.62-.863-2.886-2.66-.562-.794-.917-1.226-1.266-1.588-.77-.793-1.545-1.209-2.547-1.376zm9.732 1.765c.026-.53.091-.88.233-1.198.05-.125.107-.238.117-.238.015 0-.015.097-.05.21-.107.308-.117.74-.052 1.226.092.626.132.712.76 1.393.289.318.628.723.76.89l.222.308-.222-.222c-.274-.28-.902-.81-1.044-.88-.09-.053-.106-.053-.172.017-.05.054-.066.14-.066.545-.015.626-.09 1.015-.288 1.42-.107.21-.116.167-.026-.07.067-.184.076-.265.076-.864 0-1.21-.131-1.506-.926-1.992a10.925 10.925 0 00-.73-.405 3.05 3.05 0 01-.354-.183c.025-.027.795.21 1.1.345.455.194.536.21.587.194.035-.032.06-.145.075-.496zm-10.02-.918c-.077.934.277 2.186.824 2.996.43.626 1.094 1.112 1.59 1.171.325.027.416-.086.274-.307-.208-.308-.456-.794-.522-1.004a10.6 10.6 0 01-.197-.848c-.218-1.144-.456-1.603-.977-1.938a3.073 3.073 0 00-.836-.334l-.132-.027-.025.291zm9.352 9.052c-2.588-1.112-3.5-2.072-3.5-3.703 0-.237.016-.431.016-.431.015 0 .097.072.205.167l.018.016c.521.448 1.109.643 2.744.89.953.152 1.505.265 2 .449 1.58.556 2.563 1.7 2.796 3.244.066.448.025 1.295-.076 1.738-.091.346-.354.988-.42 1.004-.016 0-.04-.07-.04-.183-.026-.584-.3-1.145-.76-1.577-.552-.496-1.256-.874-2.983-1.614zm-1.96-.124c.04.108.107.373.132.583.208 1.312-.43 2.38-1.727 2.807-.132.054-.653.167-1.165.248-1.033.195-1.503.319-1.96.556-.324.168-.729.421-.703.448.015.011.096-.016.172-.043.593-.221 1.246-.334 2.223-.389.39-.026.836-.064.993-.08.876-.125 1.488-.405 1.96-.918a2.58 2.58 0 00.546-.934c.076-.237.091-.335.091-.75 0-.432 0-.513-.09-.777-.122-.351-.249-.6-.421-.81l-.117-.151.066.21zm1.322 2.829c-.34-.794-.42-1.544-.233-2.257.025-.07.05-.14.076-.14.025 0 .106.043.182.097.157.114.481.308 1.322.794 1.058.615 1.66 1.085 2.076 1.63.365.475.587 1.015.694 1.684.066.378.025 1.28-.066 1.657-.288 1.182-.942 2.132-1.894 2.672-.142.081-.263.14-.273.14-.01 0 .04-.14.116-.307.314-.713.355-1.393.117-2.16-.142-.474-.446-1.041-1.043-2.007-.725-1.107-.892-1.404-1.074-1.803zm-6.482 2.585c-1.094.2-2.284.81-3.25 1.674l-.274.275.248.043c1.306.21 1.656.405 2.572 1.409.522.572.704.696 1.134.82a1.198 1.198 0 001.49-.75c.09-.275.08-.723-.026-.945-.263-.54-1.033-.707-1.398-.318-.298.324-.207.826.173.907.036.005.056.007.057.004.002-.004-.024-.018-.081-.047h-.002c-.172-.087-.248-.195-.248-.378-.015-.432.44-.653.861-.459.314.151.43.345.43.68 0 .513-.42.918-.901.848a1.278 1.278 0 01-.744-.416c-.42-.502-.264-1.322.339-1.63.456-.238 1.058-.168 1.53.15.536.379.774.713 1.23 1.842.157.372.34.777.43.917.43.697.967 1.042 1.595 1.042.355 0 .618-.054.942-.238.238-.124.588-.377.562-.404 0-.011-.106.027-.222.07-.694.28-1.398.264-1.803-.054-.264-.21-.471-.6-.578-1.101-.015-.081-.08-.47-.131-.848-.147-.96-.289-1.392-.603-1.894-.324-.513-.952-.934-1.646-1.129-.43-.124-1.215-.15-1.686-.07zM13.045 14.9c.091-.361.39-.723.704-.82.207-.07.613-.032.81.075.38.211.653.67.588 1.005-.066.404-.68.739-1.398.739-.365 0-.497-.054-.638-.248-.091-.124-.117-.53-.066-.75zm1.408-.599c.197.13.238.308.131.475-.08.108-.314.222-.48.222-.264 0-.538-.195-.538-.378 0-.362.532-.556.887-.319z' }))()
export const $link = $path(attr({ d: 'M16 32c8.837 0 16-7.163 16-16S24.837 0 16 0 0 7.163 0 16s7.163 16 16 16zM14.484 6.159L16.495 5s2.012 1.163 2.016 1.163l5.478 3.18L26 10.5v11.002l-2.011 1.16-5.428 3.178L16.549 27l-2.011-1.159-5.527-3.179L7 21.503V10.501l2.007-1.163 5.477-3.18zm-3.466 6.664v6.358l5.477 3.18 5.478-3.18v-6.358l-5.477-3.179-5.478 3.18z' }))()
export const $usd = $path(attr({ 'clip-rule': 'evenodd', 'fill-rule': 'evenodd', d: 'M21 22.99v-7.98c0-.56-.49-1.01-1.1-1.01h-7.7c-.61 0-1.1.45-1.1 1.01v7.98c0 .56.49 1.01 1.1 1.01h7.7c.61 0 1.1-.45 1.1-1.01zm-4.165-5.604l1.634-.259c-.105-.469-.332-.838-.68-1.107-.346-.27-.847-.425-1.504-.466v-.435h-.641v.435c-.72.038-1.264.233-1.63.584a1.734 1.734 0 00-.545 1.305c0 .381.09.705.272.972.182.263.395.455.642.575.249.12.669.263 1.26.427v1.55c-.204-.099-.352-.213-.443-.342-.088-.129-.158-.338-.211-.628l-1.775.206c.052.293.131.544.237.752a2.147 2.147 0 001.143.997c.269.1.62.169 1.05.207v.83h.641v-.83c.36-.015.665-.062.914-.14a2.2 2.2 0 00.703-.392c.223-.179.405-.401.546-.668.143-.267.215-.56.215-.879 0-.545-.198-.994-.593-1.349-.3-.264-.894-.514-1.785-.751v-1.27c.153.082.261.164.326.246.067.079.142.222.224.43zm-1.191-.698c-.188.061-.318.137-.391.228a.496.496 0 00-.11.32c0 .13.036.243.11.34.076.093.206.172.39.237v-1.125zm.641 4.324c.25-.056.431-.147.545-.273a.625.625 0 00.176-.43.562.562 0 00-.15-.378c-.096-.117-.287-.226-.57-.325v1.406zm3.882-12.929H9.75a.836.836 0 00-.833.834c0 .458.375.833.833.833h10.417A.836.836 0 0021 8.917a.836.836 0 00-.833-.834zm2.083.834a1.042 1.042 0 102.084-.001 1.042 1.042 0 00-2.084 0zM32 15.5C32 24.06 24.837 31 16 31S0 24.06 0 15.5C0 6.94 7.163 0 16 0s16 6.94 16 15.5zM6 7.667C6 6.746 6.746 6 7.667 6H10V5c0-.392.49-.707 1.1-.707h9.8c.61 0 1.1.315 1.1.707v1h2.333C25.254 6 26 6.746 26 7.667v10c0 .92-.746 1.666-1.667 1.666h-1.666v5c0 .921-.33 1.667-1.25 1.667H10.583c-.92 0-1.36-.746-1.36-1.667v-5H7.666a1.666 1.666 0 01-1.667-1.666v-10z' }))()
export const $usdt = $path(attr({ 'clip-rule': 'evenodd', 'fill-rule': 'evenodd', d: 'M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16zm-5.312-.59l-3.955-8.314A.163.163 0 0022.586 7H9.119a.165.165 0 00-.148.096l-3.955 8.313a.158.158 0 00.035.187l10.688 10.241c.065.06.16.06.226 0l10.688-10.241a.16.16 0 00.035-.187zm-9.464 1.302v5.3h-2.735v-5.3c-3.078-.144-5.392-.752-5.392-1.48 0-.73 2.314-1.338 5.392-1.481v-1.654h-3.786V9.574H21.01v2.523h-3.786v1.654c3.074.143 5.379.75 5.379 1.48s-2.31 1.337-5.379 1.48zm-.004-.92v-1.85c2.713.121 4.736.595 4.736 1.159 0 .564-2.018 1.037-4.732 1.16h-.017c-.108.006-.507.03-1.342.03a28.4 28.4 0 01-1.376-.03c-2.718-.122-4.75-.596-4.75-1.16 0-.569 2.028-1.038 4.75-1.16v1.85c.178.013.686.044 1.39.044.842 0 1.267-.035 1.34-.044z' }))()
export const $gmt = $path(attr({ d: 'M233 466c128.682 0 233-104.318 233-233C466 104.318 361.682 0 233 0 104.318 0 0 104.318 0 233c0 128.682 104.318 233 233 233zm18.165-359.541c-75.459-.156-114.322-.467-118.076-1.091-1.74-.274-3.75-.575-5.414-.824-1.177-.176-2.181-.326-2.796-.423-1.721-.312-3.441 0-4.77.701-1.799 1.014-2.19 1.793-2.19 4.132 0 2.65-1.173 8.964-2.971 15.746-1.877 7.093-6.647 19.799-9.931 26.425-1.955 4.054-3.284 7.561-2.971 7.873 1.173.936 8.836 3.04 9.852 2.65.469-.233 2.19-2.494 3.675-5.144 5.552-9.744 16.656-18.553 25.805-20.501l1.073-.224c1.489-.311 3.433-.716 4.792-1.024 6.021-1.325 37.69-2.962 58.099-3.04 17.907 0 20.488.156 20.488 1.17 0 .701-.626 1.403-1.33 1.715-4.066 1.403-15.326 7.093-19.314 9.821-10.009 6.704-21.504 19.566-25.648 28.608-10.479 22.684-7.82 47.316 6.881 63.764 4.222 4.677 13.293 11.926 17.75 14.187 2.581 1.247 2.659 2.183.391 3.04-.275.106-.814.32-1.549.612a510.762 510.762 0 01-8.851 3.441c-16.421 6.392-33.311 15.824-40.662 22.606-1.251 1.247-2.58 2.261-2.815 2.261-.312 0-3.049 3.04-6.177 6.781-8.993 10.68-12.511 19.8-12.511 31.882 0 24.165 15.17 45.835 40.974 58.619 12.355 6.158 24.554 9.822 42.304 12.784 8.289 1.325 38.551 1.325 46.918 0 27.681-4.521 49.028-14.187 63.807-28.92 8.758-8.73 13.607-16.525 17.204-27.75 2.502-7.717 2.502-20.345 0-28.062-5.083-15.668-14.388-26.971-31.513-38.43-9.306-6.158-12.512-7.951-33.859-18.864a8068.208 8068.208 0 01-33.233-16.993c-9.697-4.911-19.002-9.9-20.722-11.069-8.68-5.925-15.405-13.953-18.533-22.138-1.955-4.911-2.346-21.515-.703-26.581 2.658-8.263 7.741-16.448 13.527-21.905 9.384-8.964 25.414-16.369 39.177-18.162 13.371-1.871 86.25-.39 97.275 1.949.829.174 1.42.311 1.92.155 1.294-.402 1.976-2.767 4.57-11.536 1.33-4.521 2.737-8.964 3.206-9.978.861-2.182.939-5.612.079-7.015-.548-.78-23.616-1.014-113.228-1.248zm-42.147 156.993c-17.829 8.886-30.81 22.45-36.44 38.196-1.642 4.521-1.876 6.392-1.798 16.759 0 11.381.625 15.435 3.44 22.606 7.116 18.318 23.146 31.882 43.79 37.105 11.651 2.962 35.736 4.131 44.415 2.182 13.059-2.884 16.109-3.897 23.224-7.405 9.619-4.677 19.08-13.797 21.817-20.969 1.642-4.209 2.815-10.289 2.815-14.265 0-5.612-1.877-16.058-3.597-20.501-3.441-8.886-11.964-18.708-21.66-24.944-3.988-2.572-23.772-12.55-55.363-27.906-5.395-2.573-10.478-4.755-11.338-4.755-.86 0-5.005 1.714-9.305 3.897z' }))()
export const $eth = $svg('g')(
  $path(attr({ d: 'M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm7.994-15.781L16.498 4 9 16.22l7.498 4.353 7.496-4.354zM24 17.616l-7.502 4.351L9 17.617l7.498 10.378L24 17.616z' }))(),
  $path(attr({ 'fill-opacity': '.298', d: 'M16.498 4v8.87l7.497 3.35zm0 17.968v6.027L24 17.616z' }))(),
  $path(attr({ 'fill-opacity': '.801', d: 'M16.498 20.573l7.497-4.353-7.497-3.348z' }))(),
  $path(attr({ 'fill-opacity': '.298', d: 'M9 16.22l7.498 4.353v-7.701z' }))(),
)


export const $tokenIconMap = {
  [ARBITRUM_TRADEABLE_ADDRESS.WBTC]: $btc,
  [ARBITRUM_TRADEABLE_ADDRESS.WETH]: $eth,
  [ARBITRUM_ADDRESS.USDC]: $usd,
  [ARBITRUM_TRADEABLE_ADDRESS.UNI]: $uni,
  [ARBITRUM_TRADEABLE_ADDRESS.LINK]: $link,
}

