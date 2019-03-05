var faq = [
  {q:"What is 'dolphin'?",
    a:"Dolphin (or dolphins, if there are more than one to talk about! [There are! Probably over six million dolphins exist!]) is a marine mammal."},
  {q:"Are dolphins hiring?",
    a:"Impossible! Although highly sociable, the kingdom of the dolphins is not yet organized into labor relations comparable to ours. Under anthro-capitalism, however, dolphins have developed impressive commodity value."},
  {q:"How do I adjust a dolphin's privacy controls?",
    a:"The control of dolphins' privacy varies from setting to setting. In the wild, dolphins may choose for themselves what they want to share. In captivity, dolphins rely on their human administrators to make those decisions. There are many routes to a career in dolphin administration. At present, none are advisable."},
  {q:"How can I comment on other people's dolphins?",
    a:"Means of commentary about dolphins also vary from setting to setting. When dealing with images or descriptions, write or speak your thoughts. When dealing with real and present dolphins, speak your thoughts around you. In either case, use audience and environment as guides for what to say and how to say it."},
  {q:"Whom should I notify if a dolphin is harassing me?",
    a:"Leave sight of the dolphin and address your concerns to its administrator(s) immediately."},
  {q:"Can I claim my child as a dolphin?",
    a:"Anything can be claimed, and so much is refutable. Consider all the repercussions of such a claim's refutation before formally advancing one."},
  {q:"What other animals resemble dolphins, and how so?",
    a:"Cats. My friend has a grey cat with a longish snout."},
  {q:"Are dolphins in the Bible?",
    a:"No extant Bible text directly names or describes dolphins as we know them. The Dead Sea Scrolls, a recently discovered set of treatises on marine life clearly intended for but never incorporated in the Bible, might."},
  {q:"What are some good experimental non-fiction books about dolphins?",
    a:"To date, every publisher of good-standing and renown have declined to print manuscripts of that class."},
  {q:"Have you ever seen a dolphin?", a:"Not in person, no."},
  {q:"Does every state have their own dolphin, as they do birds, flowers, and electoral representatives?",
    a:"States do not designate official dolphin species. Most species of dolphins can only survive in salty, oceanic water, which is extraterritorial for 24 out of our 50 states."}
]

const app = document.getElementById('root');
const container = document.createElement('div');
container.setAttribute('class', 'container');
app.appendChild(container);

const header = document.createElement('div');
header.setAttribute('class', 'row big-row container-fluid no-gutters mt-2')
container.appendChild(header)

const imgcontainer1 = document.createElement('div')
const title = document.createElement('div')
const imgcontainer2 = document.createElement('div')

imgcontainer1.setAttribute('class', 'cell col m-1 img img-left')
imgcontainer2.setAttribute('class', 'cell col m-1 img img-right')
imgcontainer1.innerHTML = "<img src='dolphin.gif' class='img-fluid p-1'/>"
imgcontainer2.innerHTML = "<img src='dolphin.gif' class='img-fluid p-1'/>"
title.setAttribute('class', 'cell title col m-1 p-2 align-middle text-center')

header.appendChild(imgcontainer1)
header.appendChild(title)
header.appendChild(imgcontainer2)

title.textContent = "FAQ about dolphins"

faq.forEach(function(e){
  const bigrow = document.createElement('div')
  const smallrowtop = document.createElement('div')
  const smallrowbottom = document.createElement('div')
  const q = document.createElement('div')
  const a = document.createElement('div')
  const qtext = document.createElement('div')
  const atext = document.createElement('div')
  bigrow.setAttribute('class', 'row big-row container-fluid no-gutters mt-2')
  smallrowtop.setAttribute('class', 'row small-row-top  container-fluid no-gutters')
  smallrowbottom.setAttribute('class', 'row small-row-bottom container-fluid no-gutters')

  q.setAttribute('class', 'cell qa col p-3 align-middle')
  a.setAttribute('class', 'cell qa col p-3 align-middle')
  qtext.setAttribute('class', 'cell text col p-2 align-middle')
  atext.setAttribute('class', 'cell text col p-2 align-middle')

  container.appendChild(bigrow);

  bigrow.appendChild(smallrowtop)
  q.innerText = "Q:"
  qtext.innerText = e.q
  smallrowtop.appendChild(q)
  smallrowtop.appendChild(qtext)

  bigrow.appendChild(smallrowbottom)
  a.innerText = "A:"
  atext.innerText = e.a
  smallrowbottom.appendChild(a)
  smallrowbottom.appendChild(atext)
})
