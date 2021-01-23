function randomPick(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}


function trashTalk(target) {

  // 宣告
  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code', '做不出來'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢', '常常頭痛']

  }

  const phrase = ['很簡單', '很容易', '很快', '很正常', '不要再逼我', '就是拿刀來拚', '感覺到腦神經大出血']


  if (!target) {
    return ' !!!!請選一個!!!! 起來講幹話 '
  }

  return `一個${target.chi}！` + randomPick(task[target.eng]) + randomPick(phrase)

}

module.exports = trashTalk