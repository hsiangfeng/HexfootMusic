<template lang="pug">
  footer.bg-dark
    .container.py-5
      .row.text-white
        .col-md-4
          h4 平台簡介
          hr.bg-primary
          p 該專案是採用 KKBOX OPEN API + Vue Cli 3 所製作，僅限前端開發練習 DEMO 用。
          p
            | 資料來源：
            a(href="https://www.kkbox.com", target="_blank") KKBOX
          p
            | 圖片來源：
            a(href="https://unsplash.com/", target="_blank") Unsplash
        .col-md-4
          h4 常用連結
          hr.bg-primary
          a(href="https://github.com/hsiangfeng/HexfootMusic.git", target="_blank").d-block
            font-awesome-icon(:icon="['fab', 'github']").mr-1
            | GitHub
          a(href="https://docs-zhtw.kkbox.codes/docs/overview", target="_blank").d-block
            font-awesome-icon(:icon="['fas','box-open']").mr-1
            | KKBOX OPEN API
          a(href="https://developers.google.com/youtube/v3", target="_blank").d-block
            font-awesome-icon(:icon="['fas','box-open']").mr-1
            | YouTube Data API
          a(href="https://www.hexschool.com/", target="_blank").d-block
            font-awesome-icon(:icon="['fas','school']").mr-1
            | HexSchool
        .col-md-4
          h4 作者
          hr.bg-primary
          a(href="https://github.com/hsiangfeng", target="_blank").d-block
            font-awesome-icon(:icon="['fas', 'user-injured']").mr-1
            | Ray
</template>
