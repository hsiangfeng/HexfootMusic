# 發生錯誤時執行終止指令
set -e

# 取得目前專案的遠端分支
originUrl=$(git config --get remote.origin.url)

# 注意若是出現以下 Url 就是走 SSH
# git@github.com:hsiangfeng/HexfootMusic.git
# 反之，若是 HTTPs 的話則是以下
# https://github.com/hsiangfeng/HexfootMusic.git
# 通常來講走 SSH 可能會出現 GitHub Public Keys 錯誤，這部分 Google 一下就可以解決囉。

nowStatus=${originUrl:0:5}
echo $nowStatus
if [ $nowStatus = 'https' ]
then
  echo '傳輸方式採用 HTTPs 模式'
  echo '目前遠端分支 URL：'$originUrl
else
  echo '傳輸方式採用 SSH 模式'
  echo '目前遠端分支 URL：'$originUrl
fi

# 打包編譯
npm run build

echo '移動目錄到編譯出來的 dist 資料夾'
#移動到打包資料夾下，若你有調整的話打包後的資料夾請務必調整
cd dist
# 初始化並設置 Git
git init
git add .
git commit -m "update `date +'%Y-%m-%d %H:%M:%S'`";

# 上傳到到 gh-pages
# 如果是走 SSH 的話可能會比較不好調整
git push -f $originUrl master:gh-pages

cd -