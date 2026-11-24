'use strict'; 

function ajustarLetra(valor) {
  const porcentaje = Number(valor);
  document.documentElement.style.fontSize = porcentaje + '%';
  document.getElementById('fontSizeValue').textContent = porcentaje + '%';
  localStorage.setItem('mp-font-size', String(porcentaje));
}

document.addEventListener('DOMContentLoaded', () => {
  const control = document.getElementById('fontSize');
  if (!control) return;

  const guardado = Number(localStorage.getItem('mp-font-size'));
  const inicial = guardado >= 100 && guardado <= 180 ? guardado : 100;

  control.value = inicial;
  ajustarLetra(inicial);

  control.addEventListener('input', () => {
    ajustarLetra(control.value);
  });
});

const dict={
es:{share:"Compartir",sharePreview:"Vista previa del mensaje",shareConfirm:"Revisé el texto y deseo compartirlo",shareInvite:"Incluir invitación a conocer Mis plegarias",shareSend:"Compartir ahora",shareCopied:"Mensaje copiado. Pegalo donde quieras compartirlo.",shareFail:"No fue posible compartir el mensaje.",name:'Mis plegarias',tagline:'Un espacio personal para recordar mis peticiones a Dios.',new:'＋ Nueva plegaria',my:'Mis plegarias',answered:'Peticiones atendidas',settings:'Configuración',
aboutTitle:'Acerca de Mis plegarias',
write:'Escribir una plegaria',back:'Volver',dictate:'También podés usar el micrófono del teclado de tu dispositivo para dictar.',placeholder:'Escribí aquí tu plegaria...',save:'Guardar',cancel:'Cancelar',prayer:'Plegaria',
gratitude:'Agradecimiento',fontSizeLabel:"Tamaño de letra",gratitudePrompt:
'¿Querés añadir un agradecimiento? (Opcional)',edit:'Editar',mark:'Marcar atendida',unmark:'Marcar pendiente',delete:'Eliminar plegaria',language:'Idioma',privacy:'Versión de prueba: las plegarias se guardan en el almacenamiento local del navegador, sin cifrado adicional. No escribas información muy sensible hasta que incorporemos protección y respaldo.',offline:'La aplicación puede funcionar sin conexión después de cargarse por primera vez desde un sitio seguro.',invite:'Invitación opcional',channel:'Reflexiones y mensajes de esperanza: El pastor terrenal que continúa (WhatsApp).',channelOpen:'Visitar el canal de WhatsApp',noads:'Sin anuncios · Sin cuentas · Compartir solo si vos lo decidís',pending:'En oración',done:'Atendida',empty:'Todavía no hay plegarias aquí.',confirm:'¿Eliminar definitivamente esta plegaria?',unsaved:'¿Descartar los cambios sin guardar?'},
en:{share:"Share",sharePreview:"Message preview",shareConfirm:"I reviewed the text and want to share it",shareInvite:"Include invitation to My Prayers",shareSend:"Share now",shareCopied:"Message copied. Paste it where you want to share.",shareFail:"Unable to share the message.",name:'My Prayers',tagline:'A personal space to remember my prayers to God.',new:'＋ New prayer',my:'My prayers',answered:'Answered prayers',settings:'Settings',
aboutTitle:'About My Prayers',
write:'Write a prayer',back:'Back',dictate:'You can also use the microphone on your device keyboard to dictate.',placeholder:'Write your prayer here...',save:'Save',cancel:'Cancel',prayer:'Prayer',gratitude:'Gratitude',
fontSizeLabel:"Font size",
gratitudePrompt:'Would you like to add a note of thanks? (Optional)',edit:'Edit',mark:'Mark answered',unmark:'Mark pending',delete:'Delete prayer',language:'Language',privacy:'Test version: prayers are stored in your browser locally, without additional encryption. Avoid very sensitive information until protection and backups are added.',offline:'This app can work offline after its first load from a secure website.',invite:'Optional invitation',channel:'Reflections and messages of hope: El pastor terrenal que continúa (WhatsApp).',channelOpen:'Visit the WhatsApp channel',noads:'No ads · No accounts · Sharing only by choice',pending:'In prayer',done:'Answered',empty:'No prayers here yet.',confirm:'Permanently delete this prayer?',unsaved:'Discard unsaved changes?'},
pt:{share:"Compartilhar",sharePreview:"Prévia da mensagem",shareConfirm:"Revisei o texto e desejo compartilhá-lo",shareInvite:"Incluir convite para conhecer o aplicativo",shareSend:"Compartilhar agora",shareCopied:"Mensagem copiada. Cole onde desejar.",shareFail:"Não foi possível compartilhar.",name:'Minhas orações',tagline:'Um espaço pessoal para recordar meus pedidos a Deus.',new:'＋ Nova oração',my:'Minhas orações',answered:'Orações atendidas',settings:'Configurações',
aboutTitle:'Sobre Minhas Orações',
write:'Escrever uma oração',back:'Voltar',dictate:'Você também pode ditar usando o microfone do teclado.',placeholder:'Escreva sua oração aqui...',save:'Salvar',cancel:'Cancelar',prayer:'Oração',gratitude:'Gratidão',
fontSizeLabel:"Tamanho da letra",
gratitudePrompt:'Deseja acrescentar um agradecimento? (Opcional)',edit:'Editar',mark:'Marcar como atendida',unmark:'Marcar como pendente',delete:'Excluir oração',language:'Idioma',privacy:'Versão de teste: as orações ficam no armazenamento local do navegador, sem criptografia adicional. Evite dados muito sensíveis até adicionarmos proteção e backup.',offline:'O aplicativo pode funcionar offline após o primeiro acesso seguro.',invite:'Convite opcional',channel:'Reflexões e mensagens de esperança: El pastor terrenal que continúa (WhatsApp).',channelOpen:'Visitar o canal do WhatsApp',noads:'Sem anúncios · Sem contas · Sem compartilhar orações',pending:'Em oração',done:'Atendida',empty:'Ainda não há orações aqui.',confirm:'Excluir esta oração permanentemente?',unsaved:'Descartar alterações não salvas?'},
fr:{share:"Partager",sharePreview:"Aperçu du message",shareConfirm:"J’ai vérifié le texte et souhaite le partager",shareInvite:"Inclure une invitation à découvrir l’application",shareSend:"Partager maintenant",shareCopied:"Message copié. Collez-le où vous le souhaitez.",shareFail:"Impossible de partager le message.",name:'Mes prières',tagline:'Un espace personnel pour me souvenir de mes prières à Dieu.',new:'＋ Nouvelle prière',my:'Mes prières',answered:'Prières exaucées',settings:'Paramètres',
aboutTitle:'À propos de Mes Prières',
write:'Écrire une prière',back:'Retour',dictate:'Vous pouvez aussi dicter avec le microphone du clavier.',placeholder:'Écrivez votre prière ici...',save:'Enregistrer',cancel:'Annuler',prayer:'Prière',gratitude:'Remerciement',
fontSizeLabel:"Taille du texte",
gratitudePrompt:'Ajouter un remerciement ? (Facultatif)',edit:'Modifier',mark:'Marquer comme exaucée',unmark:'Marquer en attente',delete:'Supprimer la prière',language:'Langue',privacy:'Version de test : les prières sont conservées localement dans le navigateur, sans chiffrement supplémentaire. Évitez les données très sensibles avant la mise en place de protections et de sauvegardes.',offline:'Cette application peut fonctionner hors ligne après son premier chargement sécurisé.',invite:'Invitation facultative',channel:'Réflexions et messages d’espoir : El pastor terrenal que continúa (WhatsApp).',channelOpen:'Visiter la chaîne WhatsApp',noads:'Sans publicité · Sans compte · Sans partage',pending:'En prière',done:'Exaucée',empty:'Aucune prière pour le moment.',confirm:'Supprimer définitivement cette prière ?',unsaved:'Ignorer les modifications non enregistrées ?'},
it:{share:"Condividi",sharePreview:"Anteprima del messaggio",shareConfirm:"Ho verificato il testo e desidero condividerlo",shareInvite:"Includi invito a conoscere l’app",shareSend:"Condividi ora",shareCopied:"Messaggio copiato. Incollalo dove vuoi.",shareFail:"Impossibile condividere il messaggio.",name:'Le mie preghiere',tagline:'Uno spazio personale per ricordare le mie preghiere a Dio.',new:'＋ Nuova preghiera',my:'Le mie preghiere',answered:'Preghiere esaudite',settings:'Impostazioni',
aboutTitle:'Informazioni su Le Mie Preghiere',
write:'Scrivi una preghiera',back:'Indietro',dictate:'Puoi anche dettare usando il microfono della tastiera.',placeholder:'Scrivi qui la tua preghiera...',save:'Salva',cancel:'Annulla',prayer:'Preghiera',gratitude:'Ringraziamento',
fontSizeLabel:"Dimensione del testo",
gratitudePrompt:'Vuoi aggiungere un ringraziamento? (Facoltativo)',edit:'Modifica',mark:'Segna come esaudita',unmark:'Segna come in attesa',delete:'Elimina preghiera',language:'Lingua',privacy:'Versione di prova: le preghiere sono memorizzate localmente nel browser, senza crittografia aggiuntiva. Evita dati molto sensibili finché non aggiungeremo protezione e backup.',offline:'L’app può funzionare offline dopo il primo caricamento sicuro.',invite:'Invito facoltativo',channel:'Riflessioni e messaggi di speranza: El pastor terrenal que continúa (WhatsApp).',channelOpen:'Visita il canale WhatsApp',noads:'Senza pubblicità · Senza account · Senza condivisione',pending:'In preghiera',done:'Esaudita',empty:'Non ci sono ancora preghiere.',confirm:'Eliminare definitivamente questa preghiera?',unsaved:'Ignorare le modifiche non salvate?'},
de:{share:"Teilen",sharePreview:"Nachrichtenvorschau",shareConfirm:"Ich habe den Text geprüft und möchte ihn teilen",shareInvite:"Einladung zur App hinzufügen",shareSend:"Jetzt teilen",shareCopied:"Nachricht kopiert. Füge sie am gewünschten Ort ein.",shareFail:"Teilen nicht möglich.",name:'Meine Gebete',tagline:'Ein persönlicher Ort, um mich an meine Gebete zu Gott zu erinnern.',new:'＋ Neues Gebet',my:'Meine Gebete',answered:'Erhörte Gebete',settings:'Einstellungen',
aboutTitle:'Über Meine Gebete',
write:'Gebet schreiben',back:'Zurück',dictate:'Du kannst auch das Mikrofon der Tastatur zum Diktieren verwenden.',placeholder:'Schreibe hier dein Gebet...',save:'Speichern',cancel:'Abbrechen',prayer:'Gebet',gratitude:'Dankbarkeit',
fontSizeLabel:"Schriftgröße",
gratitudePrompt:'Möchtest du einen Dank hinzufügen? (Optional)',edit:'Bearbeiten',mark:'Als erhört markieren',unmark:'Als offen markieren',delete:'Gebet löschen',language:'Sprache',privacy:'Testversion: Gebete werden lokal im Browser ohne zusätzliche Verschlüsselung gespeichert. Vermeide sehr sensible Daten, bis Schutz und Sicherungen ergänzt wurden.',offline:'Die App kann nach dem ersten sicheren Laden offline funktionieren.',invite:'Freiwillige Einladung',channel:'Gedanken und Hoffnungsbotschaften: El pastor terrenal que continúa (WhatsApp).',channelOpen:'WhatsApp-Kanal besuchen',noads:'Keine Werbung · Keine Konten · Kein Teilen',pending:'Im Gebet',done:'Erhört',empty:'Hier sind noch keine Gebete.',confirm:'Dieses Gebet endgültig löschen?',unsaved:'Ungespeicherte Änderungen verwerfen?'}};
const aboutTranslations = {
  es: {
    aboutSubtitle: "Un espacio personal de oración",
    aboutIntro: "Mis plegarias fue creada para ayudarte a registrar tus peticiones a Dios, recordar sus respuestas y conservar los motivos de gratitud que surgen a lo largo de tu vida.",
    aboutPurpose: "Su propósito es fortalecer la vida de oración, cultivar la memoria espiritual y reconocer la fidelidad de Dios en las experiencias cotidianas.",
    aboutPrivacyTitle: "Privacidad y confidencialidad",
    aboutPrivacy: "Tus plegarias y agradecimientos se almacenan exclusivamente en este dispositivo. La aplicación no requiere crear una cuenta ni envía el contenido de tus oraciones a servidores externos.",
    aboutImportant: "Importante:",
    aboutWarning: "Los registros podrían perderse si se eliminan los datos del navegador o se restablece el dispositivo. La protección de acceso mediante reconocimiento facial está pendiente de implementación.",
    aboutAuthorTitle: "Autoría y derechos",
    aboutAuthor: "Conocido como «El pastor terrenal que continúa»",
    aboutRights: "Todos los derechos reservados.",
    aboutLegal: "Queda prohibida la reproducción, modificación o distribución no autorizada de esta aplicación, salvo las excepciones previstas por la ley."
  },
  en: {
    aboutSubtitle: "A personal space for prayer",
    aboutIntro: "My Prayers was created to help you record your requests to God, remember His answers and preserve the reasons for gratitude throughout your life.",
    aboutPurpose: "Its purpose is to strengthen your prayer life, cultivate spiritual memory and recognize God's faithfulness in everyday experiences.",
    aboutPrivacyTitle: "Privacy and confidentiality",
    aboutPrivacy: "Your prayers and expressions of gratitude are stored exclusively on this device. No account is required, and the app does not send your prayers to external servers.",
    aboutImportant: "Important:",
    aboutWarning: "Records may be lost if browser data is deleted or the device is reset. Facial recognition access protection has not yet been implemented.",
    aboutAuthorTitle: "Authorship and rights",
    aboutAuthor: "Known as «El pastor terrenal que continúa»",
    aboutRights: "All rights reserved.",
    aboutLegal: "Unauthorized reproduction, modification or distribution of this application is prohibited, except as permitted by law."
  },
  pt: {
    aboutSubtitle: "Um espaço pessoal de oração",
    aboutIntro: "Minhas Orações foi criado para ajudar você a registrar seus pedidos a Deus, recordar Suas respostas e conservar os motivos de gratidão ao longo da vida.",
    aboutPurpose: "Seu propósito é fortalecer a vida de oração, cultivar a memória espiritual e reconhecer a fidelidade de Deus nas experiências cotidianas.",
    aboutPrivacyTitle: "Privacidade e confidencialidade",
    aboutPrivacy: "Suas orações e agradecimentos são armazenados exclusivamente neste dispositivo. O aplicativo não exige uma conta nem envia suas orações a servidores externos.",
    aboutImportant: "Importante:",
    aboutWarning: "Os registros podem ser perdidos se os dados do navegador forem apagados ou o dispositivo for redefinido. A proteção por reconhecimento facial ainda não foi implementada.",
    aboutAuthorTitle: "Autoria e direitos",
    aboutAuthor: "Conhecido como «El pastor terrenal que continúa»",
    aboutRights: "Todos os direitos reservados.",
    aboutLegal: "É proibida a reprodução, modificação ou distribuição não autorizada deste aplicativo, salvo as exceções previstas em lei."
  },
  fr: {
    aboutSubtitle: "Un espace personnel de prière",
    aboutIntro: "Mes Prières a été créé pour vous aider à noter vos demandes à Dieu, à vous souvenir de Ses réponses et à conserver vos motifs de gratitude tout au long de votre vie.",
    aboutPurpose: "Son objectif est de fortifier la vie de prière, de cultiver la mémoire spirituelle et de reconnaître la fidélité de Dieu au quotidien.",
    aboutPrivacyTitle: "Vie privée et confidentialité",
    aboutPrivacy: "Vos prières et remerciements sont conservés exclusivement sur cet appareil. Aucun compte n’est nécessaire et vos prières ne sont pas envoyées à des serveurs externes.",
    aboutImportant: "Important :",
    aboutWarning: "Les données peuvent être perdues si celles du navigateur sont effacées ou si l’appareil est réinitialisé. La protection par reconnaissance faciale n’est pas encore disponible.",
    aboutAuthorTitle: "Auteur et droits",
    aboutAuthor: "Connu sous le nom de «El pastor terrenal que continúa»",
    aboutRights: "Tous droits réservés.",
    aboutLegal: "Toute reproduction, modification ou distribution non autorisée de cette application est interdite, sauf exceptions prévues par la loi."
  },
  it: {
    aboutSubtitle: "Uno spazio personale di preghiera",
    aboutIntro: "Le mie preghiere è stata creata per aiutarti a registrare le tue richieste a Dio, ricordare le Sue risposte e conservare i motivi di gratitudine nel corso della vita.",
    aboutPurpose: "Il suo scopo è rafforzare la vita di preghiera, coltivare la memoria spirituale e riconoscere la fedeltà di Dio nella vita quotidiana.",
    aboutPrivacyTitle: "Privacy e riservatezza",
    aboutPrivacy: "Le tue preghiere e i tuoi ringraziamenti sono conservati esclusivamente su questo dispositivo. Non è necessario un account e le preghiere non vengono inviate a server esterni.",
    aboutImportant: "Importante:",
    aboutWarning: "I dati potrebbero andare persi se vengono cancellati i dati del browser o ripristinato il dispositivo. La protezione tramite riconoscimento facciale non è ancora disponibile.",
    aboutAuthorTitle: "Autore e diritti",
    aboutAuthor: "Conosciuto come «El pastor terrenal que continúa»",
    aboutRights: "Tutti i diritti riservati.",
    aboutLegal: "È vietata la riproduzione, modifica o distribuzione non autorizzata di questa applicazione, salvo le eccezioni previste dalla legge."
  },
  de: {
    aboutSubtitle: "Ein persönlicher Raum für Gebet",
    aboutIntro: "Meine Gebete wurde entwickelt, um dir zu helfen, deine Bitten an Gott festzuhalten, dich an Seine Antworten zu erinnern und Gründe zur Dankbarkeit zu bewahren.",
    aboutPurpose: "Die App soll das Gebetsleben stärken, das geistliche Gedächtnis fördern und Gottes Treue im Alltag bewusst machen.",
    aboutPrivacyTitle: "Datenschutz und Vertraulichkeit",
    aboutPrivacy: "Deine Gebete und Danksagungen werden ausschließlich auf diesem Gerät gespeichert. Ein Benutzerkonto ist nicht erforderlich. Die Gebete werden nicht an externe Server übertragen.",
    aboutImportant: "Wichtig:",
    aboutWarning: "Beim Löschen der Browserdaten oder Zurücksetzen des Geräts können die Einträge verloren gehen. Der Zugangsschutz durch Gesichtserkennung ist noch nicht verfügbar.",
    aboutAuthorTitle: "Urheberschaft und Rechte",
    aboutAuthor: "Bekannt als «El pastor terrenal que continúa»",
    aboutRights: "Alle Rechte vorbehalten.",
    aboutLegal: "Die unbefugte Vervielfältigung, Änderung oder Verbreitung dieser Anwendung ist untersagt, außer in gesetzlich vorgesehenen Fällen."
  }
};

Object.keys(aboutTranslations).forEach(code => {
  Object.assign(dict[code], aboutTranslations[code]);
});
const homeTranslations = {
  es: {
    answeredDesc: "Recuerda las respuestas de Dios a tus plegarias.",
    gratitudesTitle: "Agradecimientos espontáneos",
    gratitudesDesc: "Agradece a Dios por las bendiciones recibidas, aun sin haberlas pedido."
  },
  en: {
    answeredDesc: "Remember God's answers to your prayers.",
    gratitudesTitle: "Spontaneous thanksgiving",
    gratitudesDesc: "Thank God for the blessings received, even without asking for them."
  },
  pt: {
    answeredDesc: "Lembre-se das respostas de Deus às suas orações.",
    gratitudesTitle: "Agradecimentos espontâneos",
    gratitudesDesc: "Agradeça a Deus pelas bênçãos recebidas, mesmo sem tê-las pedido."
  },
  fr: {
    answeredDesc: "Souvenez-vous des réponses de Dieu à vos prières.",
    gratitudesTitle: "Remerciements spontanés",
    gratitudesDesc: "Remerciez Dieu pour les bénédictions reçues, même sans les avoir demandées."
  },
  it: {
    answeredDesc: "Ricorda le risposte di Dio alle tue preghiere.",
    gratitudesTitle: "Ringraziamenti spontanei",
    gratitudesDesc: "Ringrazia Dio per le benedizioni ricevute, anche senza averle chieste."
  },
  de: {
    answeredDesc: "Erinnere dich an Gottes Antworten auf deine Gebete.",
    gratitudesTitle: "Spontane Danksagungen",
    gratitudesDesc: "Danke Gott für die empfangenen Segnungen, auch wenn du nicht darum gebeten hast."
  }
};

Object.keys(homeTranslations).forEach(code => {
  Object.assign(dict[code], homeTranslations[code]);
});let gratitudes = [];
const gratitudeTranslations = {
  es: {
    gratitudeTitleLabel: "Título",
    gratitudeTitlePlaceholder: "Motivo de gratitud",
    gratitudeDateLabel: "Fecha",
    gratitudeTextLabel: "Mi agradecimiento a Dios",
    gratitudeTextPlaceholder: "Hoy quiero agradecer a Dios por...",
    gratitudeSave: "Guardar agradecimiento",
    gratitudeView: "Ver mis agradecimientos",
    gratitudeListTitle: "Mis agradecimientos"
  },
  en: {
    gratitudeTitleLabel: "Title",
    gratitudeTitlePlaceholder: "Reason for gratitude",
    gratitudeDateLabel: "Date",
    gratitudeTextLabel: "My gratitude to God",
    gratitudeTextPlaceholder: "Today I want to thank God for...",
    gratitudeSave: "Save thanksgiving",
    gratitudeView: "View my thanksgivings",
    gratitudeListTitle: "My thanksgivings"
  },
  pt: {
    gratitudeTitleLabel: "Título",
    gratitudeTitlePlaceholder: "Motivo de gratidão",
    gratitudeDateLabel: "Data",
    gratitudeTextLabel: "Minha gratidão a Deus",
    gratitudeTextPlaceholder: "Hoje quero agradecer a Deus por...",
    gratitudeSave: "Salvar agradecimento",
    gratitudeView: "Ver meus agradecimentos",
    gratitudeListTitle: "Meus agradecimentos"
  },
  fr: {
    gratitudeTitleLabel: "Titre",
    gratitudeTitlePlaceholder: "Motif de gratitude",
    gratitudeDateLabel: "Date",
    gratitudeTextLabel: "Ma gratitude envers Dieu",
    gratitudeTextPlaceholder: "Aujourd’hui, je remercie Dieu pour...",
    gratitudeSave: "Enregistrer le remerciement",
    gratitudeView: "Voir mes remerciements",
    gratitudeListTitle: "Mes remerciements"
  },
  it: {
    gratitudeTitleLabel: "Titolo",
    gratitudeTitlePlaceholder: "Motivo di gratitudine",
    gratitudeDateLabel: "Data",
    gratitudeTextLabel: "La mia gratitudine a Dio",
    gratitudeTextPlaceholder: "Oggi voglio ringraziare Dio per...",
    gratitudeSave: "Salva ringraziamento",
    gratitudeView: "Vedi i miei ringraziamenti",
    gratitudeListTitle: "I miei ringraziamenti"
  },
  de: {
    gratitudeTitleLabel: "Titel",
    gratitudeTitlePlaceholder: "Grund zur Dankbarkeit",
    gratitudeDateLabel: "Datum",
    gratitudeTextLabel: "Mein Dank an Gott",
    gratitudeTextPlaceholder: "Heute möchte ich Gott danken für...",
    gratitudeSave: "Danksagung speichern",
    gratitudeView: "Meine Danksagungen ansehen",
    gratitudeListTitle: "Meine Danksagungen"
  }
};

Object.keys(gratitudeTranslations).forEach(code => {
  Object.assign(dict[code], gratitudeTranslations[code]);
});
dict.es.viewAllFull = "Ver todas completas";
dict.en.viewAllFull = "View all full prayers";
dict.pt.viewAllFull = "Ver todas na íntegra";
dict.fr.viewAllFull = "Voir toutes les prières en entier";
dict.it.viewAllFull = "Leggi tutte le preghiere per intero";
dict.de.viewAllFull = "Alle Gebete vollständig anzeigen";try {
  const guardadas = JSON.parse(
    localStorage.getItem('mp-gratitudes') || '[]'
  );
  if (Array.isArray(guardadas)) {
    gratitudes = guardadas;
  }
} catch (error) {
  console.error('Error al leer agradecimientos:', error);
}

function guardarAgradecimiento() {
  const titulo = document.getElementById('gratitudeTitle').value.trim();
  const fecha = document.getElementById('gratitudeDate').value;
  const texto = document.getElementById('gratitudeText').value.trim();

  if (!titulo || !fecha || !texto) {
    alert('Completá el título, la fecha y el agradecimiento.');
    return;
  }

  const registro = {
    id: Date.now().toString(),
    title: titulo,
    date: fecha,
    text: texto
  };

  const actualizadas = [...gratitudes, registro];

  try {
    localStorage.setItem('mp-gratitudes', JSON.stringify(actualizadas));
    gratitudes = actualizadas;
    alert('Agradecimiento guardado correctamente.');
    
document.getElementById('gratitudeTitle').value = '';
document.getElementById('gratitudeDate').value = '';
document.getElementById('gratitudeText').value = '';

  } catch (error) {
    alert('No se pudo guardar el agradecimiento.');
  }
}

document.getElementById('saveGratitude').addEventListener('click', guardarAgradecimiento);

document.getElementById('gratitudes').addEventListener('click', () => {
  document.getElementById('gratitudeEditor').classList.remove('hidden');
  document.getElementById('home').classList.add('hidden');
});

document.querySelector('#gratitudeEditor [data-back]').addEventListener('click', () => {
  const titulo = document.getElementById('gratitudeTitle').value.trim();
  const texto = document.getElementById('gratitudeText').value.trim();

  if ((titulo || texto) && !confirm('¿Salir sin guardar el agradecimiento?')) {
    return;
  }

  document.getElementById('gratitudeEditor').classList.add('hidden');
  document.getElementById('home').classList.remove('hidden');
});

function mostrarAgradecimientos() {
  const contenedor = document.getElementById('gratitudeItems');
  contenedor.replaceChildren();

const ordenados = [...gratitudes].sort((a, b) =>
  new Date(b.date) - new Date(a.date)
);


ordenados.forEach(agradecimiento => {
  const tarjeta = document.createElement('div');
  tarjeta.className = 'card';

  const titulo = document.createElement('h3');
  titulo.textContent = agradecimiento.title;

  const fecha = document.createElement('p');
 fecha.textContent = new Date(agradecimiento.date + 'T00:00:00').toLocaleDateString(lang, {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
});

  const texto = document.createElement('p');
  texto.textContent = agradecimiento.text;
  texto.style.whiteSpace = 'pre-wrap';

  tarjeta.append(titulo, fecha, texto);
  contenedor.appendChild(tarjeta);
});
}

document.getElementById('viewGratitudes').addEventListener('click', () => {
  mostrarAgradecimientos();
  document.getElementById('gratitudeEditor').classList.add('hidden');
  document.getElementById('gratitudeList').classList.remove('hidden');
});

document.getElementById('backGratitudes').addEventListener('click', () => {
  document.getElementById('gratitudeList').classList.add('hidden');
  document.getElementById('gratitudeEditor').classList.remove('hidden');
});

const $=id=>document.getElementById(id);let preference=localStorage.getItem('mp-language')||'auto';let lang='es';let entries=[];try{const raw=JSON.parse(localStorage.getItem('mp-prayers')||'[]');if(Array.isArray(raw))entries=raw.filter(x=>x&&typeof x.text==='string');}catch{}let page='home',editing=null,selected=null,filter='all',original='';
function language(){const detected=(navigator.languages||[navigator.language||'es']).map(x=>x.split('-')[0]);return preference==='auto'?(detected.find(x=>dict[x])||'es'):preference}
function t(k){return dict[lang][k]||dict.es[k]||k}
const taglineLines={
  es:["Mis peticiones y","agradecimientos a Dios."],
  en:["My requests and","thanks to God."],
  pt:["Meus pedidos e","agradecimentos a Deus."],
  fr:["Mes demandes et","mes remerciements à Dieu."],
  it:["Le mie richieste e","i miei ringraziamenti a Dio."],
  de:["Meine Bitten und","mein Dank an Gott."]
};
function translate(){lang=language();document.documentElement.lang=lang;const lines=taglineLines[lang]||taglineLines.es;$('taglineFirst').textContent=lines[0];$('taglineSecond').textContent=lines[1];document.querySelectorAll('[data-i]').forEach(el=>el.textContent=t(el.dataset.i));document.querySelectorAll('[data-placeholder]').forEach(el=>el.placeholder=t(el.dataset.placeholder));$('language').value=preference;document.title=t('name');if(page==='listing')renderList();if(page==='detail')renderDetail()}
function show(next){page=next;document.querySelectorAll('main section').forEach(s=>s.classList.toggle('hidden',s.id!==next));window.scrollTo(0,0)}
function persist(){try{localStorage.setItem('mp-prayers',JSON.stringify(entries));return true}catch{alert('No se pudo guardar. Revisá el espacio disponible.');return false}}
function startEditor(id=null){editing=id;const entry=entries.find(x=>x.id===id);original=entry?.text||'';$('body').value=original;show('editor');$('body').focus()}
function list(which){filter=which;renderList();show('listing')}
function renderList(){const target=$('items');target.replaceChildren();$('listTitle').textContent=filter==='answered'?t('answered'):t('my');const filtered=entries.filter(x=>filter!=='answered'||x.answered).sort((a,b)=>b.created-a.created);if(!filtered.length){const p=document.createElement('p');p.className='muted';p.textContent=t('empty');target.append(p);return}for(const e of filtered){const b=document.createElement('button');b.className='card entry';const date=document.createElement('div');date.className='muted';date.textContent=new Date(e.created).toLocaleDateString(lang);const status=document.createElement('span');status.className='pill';status.textContent=e.answered?t('done'):t('pending');const p=document.createElement('p');p.textContent=e.text;b.append(date,status,p);b.onclick=()=>{selected=e.id;renderDetail();show('detail')};target.append(b)}}

function verTodasLasPlegarias() {
  const contenedor = document.getElementById('items');
  contenedor.replaceChildren();

  const ordenadas = entries.filter(x => filter !== 'answered' || x.answered).sort(
    (a, b) => new Date(b.created) - new Date(a.created)
  );

  ordenadas.forEach(plegaria => {
    const tarjeta = document.createElement('div');
    tarjeta.className = 'card';

    const titulo = document.createElement('h3');
    titulo.textContent = plegaria.name || t('prayer');

    const texto = document.createElement('p');
    texto.textContent = plegaria.text || '';
    texto.style.whiteSpace = 'pre-wrap';

    tarjeta.append(titulo, texto);
    contenedor.appendChild(tarjeta);
  });

  show('listing');
}

document.getElementById('verTodas').addEventListener('click', verTodasLasPlegarias);

function renderDetail(){const e=entries.find(x=>x.id===selected);if(!e)return list('all');$('detailDate').textContent=new Date(e.created).toLocaleDateString(lang);$('detailStatus').textContent=e.answered?t('done'):t('pending');$('detailText').textContent=e.text;$('toggle').textContent=e.answered?t('unmark'):t('mark');$('detailThanks').classList.toggle('hidden',!e.thanks);$('thanksText').textContent=e.thanks||'';$('thanksForm').classList.toggle('hidden',!e.answered);$('thanksInput').value=e.thanks||''}
function back(){if(page==='editor'&&$('body').value!==original&&!confirm(t('unsaved')))return;show('home')}
$('new').onclick=()=>startEditor();$('all').onclick=()=>list('all');$('answered').onclick=()=>list('answered');$('settings').onclick=()=>show('preferences');document.querySelectorAll('[data-back]').forEach(x=>x.onclick=back);$('language').onchange=e=>{preference=e.target.value;localStorage.setItem('mp-language',preference);translate()};$('save').onclick=()=>{const text=$('body').value.trim();if(!text)return;if(editing){const e=entries.find(x=>x.id===editing);if(e)e.text=text}else{entries.push({id:crypto.randomUUID?crypto.randomUUID():String(Date.now()),text,created:Date.now(),answered:false,thanks:''})}if(persist()){editing=null;list('all')}};$('backList').onclick=()=>list(filter);$('edit').onclick=()=>startEditor(selected);$('toggle').onclick=()=>{const e=entries.find(x=>x.id===selected);if(e){e.answered=!e.answered;if(persist())renderDetail()}};$('saveThanks').onclick=()=>{const e=entries.find(x=>x.id===selected);if(e){e.thanks=$('thanksInput').value.trim();if(persist())renderDetail()}};$('delete').onclick=()=>{if(!confirm(t('confirm')))return;entries=entries.filter(x=>x.id!==selected);if(persist())list(filter)};translate();if('serviceWorker'in navigator&&location.protocol==='https:')navigator.serviceWorker.register('./sw.js').catch(()=>{});
// Sharing is opt-in; nothing is sent to our servers. Stored entries remain untouched.
const APP_LINK='https://1957roberto.github.io/mis-plegarias/';
function shareMessage(){
 const entry=entries.find(x=>x.id===selected);
 if(!entry)return '';
 let message=entry.text;
 if($('shareInvitation').checked)message+='\n\n'+t('name')+' — '+t('tagline')+'\n'+APP_LINK;
 return message;
}
function updateSharePreview(){
 $('shareText').textContent=shareMessage();
 $('shareSend').disabled=!$('shareConsent').checked;
}
$('shareOpen').onclick=()=>{
 $('shareConsent').checked=false;
 $('shareInvitation').checked=true;
 $('sharePreview').classList.remove('hidden');
 updateSharePreview();
 $('sharePreview').scrollIntoView({behavior:'smooth',block:'start'});
};
$('shareClose').onclick=()=>{$('sharePreview').classList.add('hidden')};
$('shareInvitation').onchange=updateSharePreview;
$('shareConsent').onchange=updateSharePreview;
$('shareSend').onclick=async()=>{
 if(!$('shareConsent').checked)return;
 const message=shareMessage();
 if(!message)return;
 try{
   if(navigator.share){await navigator.share({text:message});}
   else if(navigator.clipboard?.writeText){await navigator.clipboard.writeText(message);alert(t('shareCopied'));}
   else {alert(t('shareFail'));}
 }catch(err){if(err?.name!=='AbortError')alert(t('shareFail'));}
};
const originalRenderDetail=renderDetail;
renderDetail=function(){originalRenderDetail();$('sharePreview').classList.add('hidden')};
const originalTranslate=translate;
translate=function(){originalTranslate();if(!$('sharePreview').classList.contains('hidden'))updateSharePreview()};

document.getElementById('settings').before(document.getElementById('gratitudes'));
function actualizarCalendario() {
  const dia = $('gratitudeDay');
  const mes = $('gratitudeMonth');
  const anio = $('gratitudeYear');
  const fecha = $('gratitudeDate');

  if (!dia || !mes || !anio || !fecha) return;

  const hoy = new Date();
  const d = Number(dia.value) || hoy.getDate();
  const m = Number(mes.value) || hoy.getMonth() + 1;
  const a = Number(anio.value) || hoy.getFullYear();

  const etiquetas = {
    es: ['Día', 'Mes', 'Año'],
    en: ['Day', 'Month', 'Year'],
    pt: ['Dia', 'Mês', 'Ano'],
    fr: ['Jour', 'Mois', 'Année'],
    it: ['Giorno', 'Mese', 'Anno'],
    de: ['Tag', 'Monat', 'Jahr']
  };

  const nombres = etiquetas[lang] || etiquetas.es;
  dia.setAttribute('aria-label', nombres[0]);
  mes.setAttribute('aria-label', nombres[1]);
  anio.setAttribute('aria-label', nombres[2]);

  mes.replaceChildren();
  anio.replaceChildren();
  dia.replaceChildren();

  for (let i = 1; i <= 12; i++) {
    const nombre = new Intl.DateTimeFormat(lang, {
      month: 'long'
    }).format(new Date(2026, i - 1, 1));

    mes.add(new Option(nombre, i));
  }

for (let i = 2050; i >= 2020; i--) {
    anio.add(new Option(i, i));
  }

  mes.value = m;
  anio.value = a;

  const maximo = new Date(a, m, 0).getDate();

  for (let i = 1; i <= maximo; i++) {
    dia.add(new Option(i, i));
  }

  dia.value = Math.min(d, maximo);

  fecha.value =
    anio.value + '-' +
    mes.value.padStart(2, '0') + '-' +
    dia.value.padStart(2, '0');

  dia.onchange = actualizarCalendario;
  mes.onchange = actualizarCalendario;
  anio.onchange = actualizarCalendario;
}

const translateAntesCalendario = translate;

translate = function() {
  translateAntesCalendario();
  actualizarCalendario();
};

$('gratitudes').addEventListener(
  'click', actualizarCalendario
);

actualizarCalendario();
