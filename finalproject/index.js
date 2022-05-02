function changeText(){
    let linkText = document.getElementById("LINKTEXT");
    let guideText = document.getElementById("GUIDETEXT");
    let submitButton = document.getElementById("SUBMITBUTTON");
    linkText.outerHTML = "<input class=\"formEntry\" id=\"dob\" name=\"dob\" type=\"date\" required>";
    guideText.innerHTML = "Input Date of Birth";
    submitButton.style.visibility = "visible";
}
function openNav(){
    let menuButton = document.getElementById("MENUBUTTON");
    let navMenu = document.getElementById("NAVMENU");
    menuButton.style.visibility = "hidden";
    navMenu.style.visibility = "visible";
    navMenu.style.transition = ".4s ease-out";
    navMenu.style.right = "2%";
}
function closeNav(){
    let menuButton = document.getElementById("MENUBUTTON");
    let navMenu = document.getElementById("NAVMENU");
    navMenu.style.visibility = "hidden";
    navMenu.style.transition = ".2s";
    navMenu.style.right = "-100%";
    menuButton.style.visibility = "visible";
}
function submitForm() {
    let bday = new Date();
    bday = document.getElementById('dob').valueAsDate;
    let submitButton = document.getElementById("SUBMITBUTTON");
    let signName = calculateZodiac(bday);
    let signData = getSignData(signName);
    let signIMG = signData[0];
    let signP = signData[1];
    let signType = signData[2];
    let quizDiv = document.getElementById('QUIZ');
    let resultDiv = document.getElementById('RESULT');

    quizDiv.outerHTML = ''
    resultDiv.classList.remove("resultStart");
    resultDiv.classList.add("resultEnd");
    submitButton.outerHTML = ''

    loadSign(signName, signType, signIMG, signP);
}
function hideList(signName){
    let signData = getSignData(signName);
    let signIMG = signData[0];
    let signP = signData[1];
    let signType = signData[2];
    let quizDiv = document.getElementById('QUIZ');
    let resultDiv = document.getElementById('RESULT');

    quizDiv.outerHTML = '';
    resultDiv.classList.remove("resultStart");
    resultDiv.classList.add("resultEnd");

    loadSign(signName, signType, signIMG, signP);
}
function loadSign(signName, signType, signIMG, signP){
    let htmlH1 = document.getElementById("STARSIGN");
    let htmlH2 = document.getElementById("SIGNTYPE");
    let htmlIMG = document.getElementById("STARSIGNIMG");
    let htmlP = document.getElementById("STARSIGNP");
    htmlIMG.src = signIMG;
    htmlH1.innerHTML = "You are " + signName;
    htmlH2.innerHTML = "- " + signType;
    htmlP.innerHTML = signP;
}
function calculateZodiac(dob){
    let sign = '';
    let month = dob.getMonth();
    let day = dob.getDate();
    switch(month){
        case 0:
          if (day < 21){
            sign = 'Capricorn';
          } else {
            sign = 'Aquarius';
          }
          break;
        case 1:
          if (day < 20){
            sign = 'Aquarius';
          } else {
            sign = 'Pisces';
          }
          break;
        case 2:
          if (day < 22){
            sign = 'Pisces';
          } else {
            sign = 'Aries';
          }
          break;
        case 3:
          if (day < 21){
            sign = 'Aries';
          } else {
            sign = 'Taurus';
          }
          break;
        case 4:
          if (day < 22){
            sign = 'Taurus';
          } else {
            sign = 'Gemini';
          }
          break;
        case 5:
          if (day < 22){
            sign = 'Gemini';
          } else {
            sign = 'Cancer';
          }
          break;
        case 6:
          if (day < 24){
            sign = 'Cancer';
          } else {
            sign = 'Leo';
          }
          break;
        case 7:
          if (day < 24){
            sign = 'Leo';
          } else {
            sign = 'Virgo';
          }
          break;
        case 8:
          if (day < 24){
            sign = 'Virgo';
          } else {
            sign = 'Libra';
          }
          break;
        case 9:
          if (day < 24){
            sign = 'Libra';
          } else {
            sign = 'Scorpio';
          }
          break;
        case 10:
          if (day < 23){
            sign = 'Scorpio';
          } else {
            sign = 'Sagittarius';
          }
          break;
        case 11:
          if (day < 23){
            sign = 'Sagittarius';
          } else {
            sign = 'Capricorn';
          }
          break;
        default:
          sign = null;
    }
    return sign;
}
function getSignData(sign){
  //This is beyond redundant and should be refactored into the same function as calculateZodiac but I do not have the time haha
  let signIMG = '';
  let signP = '';
  let signType = '';
  switch(sign){
    case 'Aquarius':
      signIMG = 'media/aquarius.png';
      signP = 'The Aquarius is the sign of the water bearer. It is depicted as a humanitarian holding a jar of water, many claims are made that aquarius is a cruel and unkind sign. Often characterized as being rational, hypercritical, and analytical, the Aquarius gets a bad reputation sometimes. But from the Aquarius point of view, they\'re trying to live life by a set of rational moral standards and have little patience for people who don\'t treat them with similar respect. Next time you feel like an Aquarius is being unkind towards you, maybe reflect on how you\'ve treated them, because their respect, or disrespect is seldom random and often earned.';
      signType = 'The Waterbearer';
      break;
    case 'Pisces':
      signIMG = 'media/pisces.png';
      signP = 'The Pisces is the sign of the two fish. It is depicted as two fish often tied at the tail, or sometimes swimming in opposing directions. Some people view the Pisces as a naive sign, often dreaming of the future instead of acting to change it. Pisces is the idealist, often seeking comfort before the truth. This makes Pisces very easy to get along with if you ever need someone to take care of you, as Pisces is a very forgiving and understanding sign. Wanting to see the good in the world, as well as other people is what makes Pisces a truly one of a kind personality.';
      signType = 'The Two Fish';
      break;
    case 'Aries':
      signIMG = 'media/aries.png';
      signP = 'The Aries is the sign of the ram. Despite being depicted as sheep, Aries are often viewed as real go-getters who look to forge their own path. Aries is a sign that can be hot-headed and passionate about the things they care about, often at the detriment of the people around them. If you can handle the abraisiveness, don\'t be afraid to attach yourself to the life of an Aries, as they\'re one of the most reliable signs, and always sure to shoot for the stars. No pun intended.';
      signType = 'The Ram';
      break;
    case 'Taurus':
      signIMG = 'media/taurus.png';
      signP = 'The Taurus is the sign of the bull. As they say, \"You mess with the bull, you get the horns.\" Taurus is a hard-headed, stubborn sign who often believes it\'s their way or the highway. Negotiating with a Taurus takes incredible patience and charisma, and they often don\'t see eye-to-eye with one another. This determination makes them an incredibly good protector and leader of the household, as you can be sure that they\'re loyal to a fault, and won\'t ever give up on the people that they choose to surround themselves with.';
      signType = 'The Bull';
      break;
    case 'Gemini':
      signIMG = 'media/gemini.png';
      signP = 'The Gemini is the sign of the twins. Gemeni have a bad reputation for being \"two-faced\" by those who read too far into the symbolism of their constellation. People who get to know gemini really well, however, begin to understand that they simply refuse to entertain people that don\'t treat them well. Gemini\'s are a very self-assured and self-reliant sign, and with the people they trust, they are known to be very playful at heart. Just make sure you don\'t get on their bad side, as they are not very easily forgiving.';
      signType = 'The Twins';
      break;
    case 'Cancer':
      signIMG = 'media/cancer.png';
      signP = 'The Cancer is the sign of the crab. Cancers may have a hard exterior, putting on a tough face for many people, but those who get close to the Cancer will realize that they have a very soft personality at heart. Often hesitant, earning the trust of a Cancer can be a tricky task, but once you do earn their trust, you\'ll have a friend for life. In their personal life, Cancers are known to go with the flow of things, and ask for very little. Cancers often struggle with communicating their needs, so take the initiative to keep track of how they are doing regularly.';
      signType = 'The Crab';
      break;
    case 'Leo':
      signIMG = 'media/leo.png';
      signP = 'The Leo is the sign of the lion. Leo\'s are often depicted as a prideful sign due to their ties with lions. Often outgoing, a Leo absolutely adores the spotlight. Nothing satisfies a Leo more than the attention of other people, and as such they are often seen performing on big stages or surrounding themselves with admirers. This can make genuine connections a tough task for many Leo\'s, but those who find themselves in the life of a Leo, are sure to be mesmerized by their seemingly endless talents.';
      signType = 'The Lion';
      break;
    case 'Virgo':
      signIMG = 'media/virgo.png';
      signP = 'The Virgo is the sign of the virgin. Virgo\'s are thought to be incredibly intelligent, and often reclusive. The virgo is known to keep mostly to themselves, and often prefers the empirical, stastical side of things rather than flights of fancy. Not one for taking risks, a Virgo is often hard to get close to. But a long conversation with a Virgo will prove that they are in truth, incredibly insightful. Virgo\'s often give the best advice of any sign, and tend to have many connections of people who trust them implicitly, as they are not keen on dishonestly.';
      signType = 'The Virgin';
      break;
    case 'Libra':
      signIMG = 'media/libra.png';
      signP = 'The Libra is the sign of the scales. Balance is obviously a very important part of a Libra\'s lifestyle. Making certain that they have the time and energy for every task in the day, Libra\'s are keen on heavy preperation. This can make them perfect for organizing events, or being the voice of reason in many friend groups. However, nobody is perfect, and if something goes wrong with a Libra\'s plan, there is sure to be disaster. Libra\'s tendency towards optimism can sometimes blindside them, and they don\'t always know how to prepare for the worst situations.';
      signType = 'The Scales';
      break;
    case 'Scorpio':
      signIMG = 'media/scorpio.png';
      signP = 'The Scorpio is the sign of the scorpion. Often characterized as harsh and cruel, the scorpion has a bad reputation for \"stinging\" others. Scorpions have a hard time seeing other perspectives, and often need to work on their massive egos. However, friends of the Scorpio will also know that they are by far the most fun sign to be around. Consisting of party animals, comedians, and all around cool folks, hanging out with a Scorpio is always sure to be a good time.';
      signType = 'The Scorpion';
      break;
    case 'Sagittarius':
      signIMG = 'media/sagittarius.png';
      signP = 'The Sagittarius is the sign of the archer. Sagittarius is a very emotionally sensitive sign, and can react to even the slightest emotional changes. This makes them great companions for those experiencing emotional distress, as they often seem to know the right things to say. Their insight tends to be incredibly accurate, and easy to trust. Sagittarius should be careful how much time they spend focusing on helping others, as they often don\'t notice when they are too emotionally drained themselves.';
      signType = 'The Archer';
      break;
    case 'Capricorn':
      signIMG = 'media/capricorn.png';
      signP = 'The Capricorn is the sign of the sea goat. Often represented as a goat with a fish tail, this sign is often linked to the Greek deity Pan. Pan was a goat who once lept into a river and tried to change himself into a fish to evade the monster Typhon. This transformed only his lower half into a fish, and his upper half remained a goat. This amusing tale illustrates how Capricorns are often incredibly creative, and come up with solutions that other signs wouldn\'t normally think of. This can sometimes end in failure, much to the amusement of any spectators.';
      signType = 'The Sea Goat';
      break;
    default:
      signIMG = null;
      signP = null;
  }
  return [signIMG, signP, signType];
}