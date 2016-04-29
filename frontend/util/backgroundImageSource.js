

var backgroundImages = {
  returnImgSource: function() {

    var urls = [
      'http://res.cloudinary.com/dn07p1frq/image/upload/v1461888889/photo-1428189923803-e9801d464d76_emkszx.jpg',
      'http://res.cloudinary.com/dn07p1frq/image/upload/v1461887817/photo-1460626399219-57a00a2361cb_gs6nvv.jpg',
      'http://res.cloudinary.com/dn07p1frq/image/upload/v1461887816/photo-1460574283810-2aab119d8511_rb0qwe.jpg',
      'http://res.cloudinary.com/dn07p1frq/image/upload/v1461887815/photo-1460750860062-82a52139a0d6_rqgj80.jpg',
      'http://res.cloudinary.com/dn07p1frq/image/upload/v1461887810/photo-1460896114392-b9f543cc4dd1_d3i1cj.jpg',
      'http://res.cloudinary.com/dn07p1frq/image/upload/v1461887810/photo-1461490511063-d6ffdfe0c08a_vp6dcb.jpg',
      'http://res.cloudinary.com/dn07p1frq/image/upload/v1461887808/photo-1453814235491-3cfac3999928_zmiy0r.jpg',
      'http://res.cloudinary.com/dn07p1frq/image/upload/v1461887808/photo-1458349726531-234ad56ba80f_boen8l.jpg',
      'http://res.cloudinary.com/dn07p1frq/image/upload/v1461887807/photo-1459378560864-f0b73495599c_dg8h2n.jpg',
      'http://res.cloudinary.com/dn07p1frq/image/upload/v1461887807/photo-1458080767772-b1011d305557_eufs2m.jpg',
      'http://res.cloudinary.com/dn07p1frq/image/upload/v1461887807/photo-1458322123925-233ebb935021_qf0nrm.jpg',
      'http://res.cloudinary.com/dn07p1frq/image/upload/v1461887806/photo-1455815733317-8d68d858d95d_tgktac.jpg',
      'http://res.cloudinary.com/dn07p1frq/image/upload/v1461887805/photo-1453574503519-1ae2536262ec_hynzbj.jpg',
      'http://res.cloudinary.com/dn07p1frq/image/upload/v1461887805/photo-1452110040644-6751c0c95836_xg6x5z.jpg',
      'http://res.cloudinary.com/dn07p1frq/image/upload/v1461887805/photo-1453282716202-de94e528067c_sfxoqq.jpg',
      'http://res.cloudinary.com/dn07p1frq/image/upload/v1461887805/photo-1453974336165-b5c58464f1ed_aooaps.jpg',
      'http://res.cloudinary.com/dn07p1frq/image/upload/v1461887804/photo-1452723312111-3a7d0db0e024_m6y8ky.jpg',
      'http://res.cloudinary.com/dn07p1frq/image/upload/v1461887804/photo-1452639479057-3f773899ab7d_vqud9i.jpg',
      'http://res.cloudinary.com/dn07p1frq/image/upload/v1461887804/photo-1453106037972-08fbfe790762_yrswxi.jpg',
      'http://res.cloudinary.com/dn07p1frq/image/upload/v1461887803/photo-1453128650469-95f7ddbe78cf_swl3ie.jpg',
      'http://res.cloudinary.com/dn07p1frq/image/upload/v1461887803/photo-1451845208896-7bccc515236e_qglsbx.jpg',
      'http://res.cloudinary.com/dn07p1frq/image/upload/v1461887802/photo-1449157291145-7efd050a4d0e_krb71z.jpg',
      'http://res.cloudinary.com/dn07p1frq/image/upload/v1461887802/photo-1447678523326-1360892abab8_ykmq26.jpg',
      'http://res.cloudinary.com/dn07p1frq/image/upload/v1461887802/photo-1441135329690-b422f89317d5_k6kig4.jpg',
      'http://res.cloudinary.com/dn07p1frq/image/upload/v1461887802/photo-1444760134166-9b8f7d0fc038_qhaolr.jpg',
      'http://res.cloudinary.com/dn07p1frq/image/upload/v1461887801/photo-1433769778268-24b797c4fc9a_qpjqu8.jpg',
      'http://res.cloudinary.com/dn07p1frq/image/upload/v1461887801/photo-1444682717031-a2498d603d5b_hxrfqj.jpg',
      'http://res.cloudinary.com/dn07p1frq/image/upload/v1461887800/photo-1441986380878-c4248f5b8b5b_hurd7n.jpg',
      'http://res.cloudinary.com/dn07p1frq/image/upload/v1461887800/photo-1442706722731-7284acc0a2d7_qycjsn.jpg',
      'http://res.cloudinary.com/dn07p1frq/image/upload/v1461887799/photo-1433190126985-4b7edf76ca13_k5hm6n.jpg',
      'http://res.cloudinary.com/dn07p1frq/image/upload/v1461887799/photo-1430651717504-ebb9e3e6795e_bc0a1a.jpg',
      'http://res.cloudinary.com/dn07p1frq/image/upload/v1461887799/photo-1434871619871-1f315a50efba_d6kjsj.jpg',
      'http://res.cloudinary.com/dn07p1frq/image/upload/v1461887798/photo-1428190034887-f114ce6e4bee_qk4eoe.jpg',
      'http://res.cloudinary.com/dn07p1frq/image/upload/v1461887798/photo-1428535172630-fb1c050ac3e0_grmvsb.jpg',
      'http://res.cloudinary.com/dn07p1frq/image/upload/v1461887798/Mj7V8XkOQLqVOyeXxixu_fierari-boardedwindows_dljzbm.jpg',
      'http://res.cloudinary.com/dn07p1frq/image/upload/v1461887798/photo-1422919869950-5fdedb27cde8_ms7xf7.jpg',
      'http://res.cloudinary.com/dn07p1frq/image/upload/v1461887797/photo-1428190415133-29b766b213d1_l6wmz6.jpg',
      'http://res.cloudinary.com/dn07p1frq/image/upload/v1461887797/photo-1422393462206-207b0fbd8d6b_giex2u.jpg',
    ];

    var urlIndex = Math.random() * (this.urls.length - 0) + 0;

    debugger

    return urls[urlIndex];
  }
};


module.exports = backgroundImages;
