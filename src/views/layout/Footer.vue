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
            a(href="https://www.kkbox.com") KKBOX
        .col-md-4
          h4 常用連結
          hr.bg-primary
          a(href="https://github.com/hsiangfeng/HexfootMusic.git").d-block GitHub
          a(href="https://docs-zhtw.kkbox.codes/docs/overview").d-block KKBOX OPEN API
          a(href="https://www.hexschool.com/").d-block HexSchool
        .col-md-4
          h4 作者
          hr.bg-primary
          p
            font-awesome-icon(:icon="['fas', 'user-injured']" size="2x")
            span.pl-2 Ray
</template>
