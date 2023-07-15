import React from 'react'

const Logo = () => {
  return (
    <div>
        <svg width="100" height="80" viewBox="0 0 120 91" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M42.1531 87.5002V80.499C42.1531 79.5708 42.5232 78.6806 43.1819 78.0242C43.8406 77.3679 44.7341 76.9992 45.6656 76.9992C46.5972 76.9992 47.4907 77.3679 48.1494 78.0242C48.8081 78.6806 49.1782 79.5708 49.1782 80.499V87.5002C49.1782 88.4284 48.8081 89.3186 48.1494 89.9749C47.4907 90.6313 46.5972 91 45.6656 91C44.7341 91 43.8406 90.6313 43.1819 89.9749C42.5232 89.3186 42.1531 88.4284 42.1531 87.5002V87.5002ZM13.3783 77.6734C13.0518 77.3485 12.7929 76.9628 12.6162 76.5381C12.4394 76.1135 12.3485 75.6583 12.3485 75.1986C12.3485 74.7389 12.4394 74.2837 12.6162 73.8591C12.7929 73.4345 13.0518 73.0487 13.3783 72.7239L18.3458 67.7744C18.6716 67.4487 19.0587 67.1903 19.4849 67.014C19.9112 66.8377 20.3681 66.747 20.8296 66.747C21.2911 66.747 21.748 66.8377 22.1742 67.014C22.6004 67.1903 22.9875 67.4487 23.3133 67.7744C23.97 68.4318 24.3386 69.3216 24.3386 70.2491C24.3386 71.1766 23.97 72.0664 23.3133 72.7239L18.3458 77.6734C18.0198 77.9986 17.6326 78.2567 17.2064 78.4328C16.7803 78.6088 16.3234 78.6994 15.8621 78.6994C15.4007 78.6994 14.9439 78.6088 14.5177 78.4328C14.0915 78.2567 13.7043 77.9986 13.3783 77.6734V77.6734ZM108.38 71.2797C108.371 70.5174 108.519 69.7614 108.813 69.058C109.108 68.3546 109.544 67.7187 110.095 67.1894C110.645 66.6601 111.299 66.2485 112.015 65.9801C112.731 65.7117 113.494 65.592 114.259 65.6285C115.021 65.5885 115.782 65.7082 116.495 65.9799C117.208 66.2516 117.855 66.6692 118.396 67.2058C118.936 67.7424 119.358 68.386 119.633 69.095C119.908 69.8041 120.031 70.5628 119.993 71.3221C119.993 71.5669 119.952 71.9139 119.932 72.1792H111.59C111.762 72.8617 112.176 73.4595 112.754 73.8631C113.333 74.2667 114.038 74.4491 114.741 74.3768C115.25 74.3972 115.758 74.3136 116.233 74.1311C116.709 73.9486 117.142 73.6711 117.506 73.3157L119.206 75.1523C118.624 75.7612 117.915 76.2355 117.13 76.542C116.344 76.8485 115.501 76.9796 114.659 76.9262C110.852 76.934 108.374 74.5464 108.374 71.2812L108.38 71.2797ZM111.546 70.3268H116.973C116.865 69.6879 116.533 69.108 116.036 68.6897C115.539 68.2715 114.91 68.0421 114.259 68.0421C113.609 68.0421 112.98 68.2715 112.483 68.6897C111.986 69.108 111.654 69.6879 111.546 70.3268ZM97.2496 75.7551L98.3115 73.4664C99.4701 74.1547 100.793 74.5211 102.142 74.5275C103.616 74.5275 104.169 74.1382 104.169 73.5276C104.169 71.7318 97.5127 73.5684 97.5127 69.1809C97.5127 67.0994 99.4033 65.63 102.613 65.63C104.083 65.6024 105.538 65.9316 106.852 66.5892L105.787 68.8544C104.819 68.3094 103.724 68.0279 102.613 68.0381C101.179 68.0381 100.564 68.487 100.564 69.06C100.564 70.9437 107.221 69.1212 107.221 73.4475C107.221 75.4882 105.316 76.9372 102.022 76.9372C100.355 76.967 98.7094 76.5571 97.2528 75.7488L97.2496 75.7551ZM92.1498 76.777V65.7917H95.3448V76.7708L92.1498 76.777ZM86.4559 76.777L83.6941 72.7914H80.6424V76.7708H77.3244V62.5815C75.0363 64.9294 72.2984 66.7957 69.2731 68.0697C66.2477 69.3438 62.9964 69.9998 59.7119 69.9987C57.3267 69.9674 54.9592 69.5838 52.6868 68.8606C50.4144 69.5835 48.047 69.967 45.6617 69.9987C39.1404 69.9987 32.8861 67.4175 28.2749 62.823C23.6636 58.2284 21.073 51.9969 21.073 45.4992C21.073 39.0015 23.6636 32.77 28.2749 28.1754C32.8861 23.5809 39.1404 20.9997 45.6617 20.9997C48.047 21.0314 50.4144 21.4149 52.6868 22.1378C54.9592 21.4147 57.3267 21.0312 59.7119 20.9997C63.5967 20.9993 67.4263 21.9159 70.8871 23.6744C74.3478 25.433 77.3411 27.9834 79.6219 31.1168C81.9027 34.2501 83.406 37.8773 84.0086 41.7011C84.6113 45.525 84.2962 49.4367 83.0891 53.1158C82.8745 53.1386 82.6589 53.1502 82.4431 53.1503C79.7097 53.1503 78.3232 51.5036 78.3232 48.2526V37.6645H72.423V49.1238C72.423 54.7546 75.4464 58.0716 80.718 58.2364C79.7744 59.7715 78.6649 61.1991 77.4094 62.4936H83.5224C87.3524 62.4936 89.7487 64.4731 89.7487 67.6739C89.7875 68.6356 89.5257 69.5855 88.9994 70.3926C88.473 71.1996 87.7082 71.8239 86.8104 72.1792L90.026 76.7708L86.4559 76.777ZM80.6392 70.1651H83.3443C85.372 70.1651 86.3961 69.2233 86.3961 67.6739C86.3961 66.1245 85.372 65.1842 83.3443 65.1842H80.6424L80.6392 70.1651ZM28.1028 45.5008C28.1104 49.5409 29.5177 53.4545 32.0869 56.5802C34.6561 59.7058 38.2297 61.8518 42.2035 62.6553C37.6705 58.0885 35.128 51.9246 35.128 45.5016C35.128 39.0785 37.6705 32.9147 42.2035 28.3478C38.2297 29.1508 34.656 31.2963 32.0867 34.4218C29.5174 37.5472 28.1102 41.4608 28.1028 45.5008V45.5008ZM46.7488 55.3339C49.9457 57.4197 53.7051 58.4843 57.5252 58.3855C64.347 58.3855 68.7553 55.1769 68.7553 50.2117C68.7553 44.5432 63.4065 43.3251 59.1101 42.3471C56.0269 41.6454 53.3659 41.0379 53.3659 39.0223C53.3659 37.1072 55.1982 36.0068 58.3933 36.0068C60.9775 36.0547 63.5052 36.7685 65.7303 38.0789L67.6209 33.4449C64.8283 31.8484 61.6516 31.0409 58.4326 31.1091C51.658 31.1091 47.2782 34.3334 47.2782 39.3221C47.2782 45.0503 52.6207 46.2872 56.9139 47.2809C60.0018 47.9952 62.6691 48.6137 62.6691 50.6638C62.6691 52.4863 60.8557 53.4894 57.5645 53.4894C54.4419 53.4676 51.3982 52.5093 48.83 50.7391L46.7488 55.3339ZM91.7638 62.4873C91.7688 62.2381 91.8253 61.9925 91.9296 61.7658C92.0339 61.5392 92.1839 61.3363 92.3702 61.1698C92.5565 61.0033 92.7751 60.8768 93.0126 60.798C93.25 60.7192 93.5012 60.6899 93.7505 60.7119C93.9956 60.6855 94.2436 60.7096 94.479 60.7829C94.7144 60.8562 94.9321 60.977 95.1185 61.1379C95.3049 61.2987 95.4561 61.4961 95.5625 61.7178C95.669 61.9394 95.7284 62.1806 95.7371 62.4261C95.7015 62.9219 95.4806 63.3863 95.1182 63.7278C94.7558 64.0693 94.2781 64.2631 93.7793 64.271C93.2806 64.2789 92.7969 64.1003 92.4238 63.7704C92.0507 63.4405 91.8152 62.9833 91.7638 62.4889V62.4873ZM80.718 58.2301C81.7006 56.6216 82.4936 54.9055 83.0812 53.1158C85.6509 52.8348 87.1239 50.8569 87.1239 47.6859V37.6645H93.0226V57.9256H87.4406V55.5222C86.6473 56.4041 85.6712 57.1039 84.5799 57.573C83.4885 58.0422 82.3079 58.2696 81.1197 58.2395C80.9811 58.2395 80.8535 58.2395 80.718 58.2301ZM104.41 57.935H98.5132V37.6645H104.141V40.038C105.013 39.1491 106.063 38.4524 107.222 37.9927C108.381 37.5331 109.625 37.3207 110.871 37.3693C113.09 37.2642 115.259 38.0412 116.902 39.5294C117.748 40.4399 118.398 41.5125 118.813 42.6816C119.228 43.8508 119.4 45.0921 119.318 46.3296V57.9256H113.411V47.2338C113.507 45.9349 113.122 44.646 112.329 43.6108C111.937 43.2089 111.462 42.8967 110.938 42.6958C110.413 42.4949 109.85 42.4102 109.29 42.4476C106.191 42.4476 104.406 44.438 104.406 47.9104V57.9256L104.41 57.935ZM3.51256 48.9998C2.58097 48.9998 1.68754 48.6311 1.02881 47.9747C0.370072 47.3184 0 46.4282 0 45.5C0 44.5718 0.370072 43.6816 1.02881 43.0253C1.68754 42.3689 2.58097 42.0002 3.51256 42.0002H10.5393C11.4708 42.0002 12.3643 42.3689 13.023 43.0253C13.6817 43.6816 14.0518 44.5718 14.0518 45.5C14.0518 46.4282 13.6817 47.3184 13.023 47.9747C12.3643 48.6311 11.4708 48.9998 10.5393 48.9998H3.51256ZM18.3411 23.2241L13.3751 18.2761C12.7164 17.6198 12.3463 16.7296 12.3463 15.8014C12.3463 15.3418 12.4372 14.8867 12.6137 14.4621C12.7902 14.0374 13.049 13.6516 13.3751 13.3266C13.7013 13.0016 14.0885 12.7438 14.5147 12.568C14.9409 12.3921 15.3976 12.3015 15.8589 12.3015C16.7905 12.3015 17.6839 12.6703 18.3427 13.3266L23.3102 18.2761C23.6364 18.6011 23.8951 18.9869 24.0716 19.4116C24.2481 19.8362 24.339 20.2913 24.339 20.7509C24.339 21.2105 24.2481 21.6656 24.0716 22.0902C23.8951 22.5148 23.6364 22.9007 23.3102 23.2256C22.984 23.5506 22.5968 23.8084 22.1706 23.9843C21.7445 24.1602 21.2877 24.2507 20.8264 24.2507C20.3652 24.2507 19.9084 24.1602 19.4822 23.9843C19.0561 23.8084 18.6688 23.5506 18.3427 23.2256L18.3411 23.2241ZM42.1531 10.501V3.49982C42.1531 2.57161 42.5232 1.68142 43.1819 1.02507C43.8406 0.36873 44.7341 0 45.6656 0C46.5972 0 47.4907 0.36873 48.1494 1.02507C48.8081 1.68142 49.1782 2.57161 49.1782 3.49982V10.501C49.1782 11.4292 48.8081 12.3194 48.1494 12.9758C47.4907 13.6321 46.5972 14.0008 45.6656 14.0008C44.7341 14.0008 43.8406 13.6321 43.1819 12.9758C42.5232 12.3194 42.1531 11.4292 42.1531 10.501V10.501Z" fill="white"/>
</svg>

    </div>
  )
}

export default Logo