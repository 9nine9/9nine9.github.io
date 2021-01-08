var countPortFolio = 11;

var dump=[];
dump[countPortFolio - 1]=null;

$.each(dump, function(i, v) { // New scope for i and v
    $('.modal-' + i).click(function() {
        showModal(i);
    });
});

function showModal(i){
	//console.log(i);
	$("#modalHeader").html(modalData[i].header); 
	$("#modalBody").html(modalData[i].body); 
	$('#myModal').modal('show');
}

var modalData = [
	{
		id: 0,
		header: "Loopprentice",
		body: "Loopprentice merupakan website di mana anak-anak muda dapat berkarya dengan konten-konten yang seru dan menarik dari Telkomsel. " +
		"Seperti Sosmed Challenge, Content Creator, KartuKamu, dan Merdeka Belajar yang pastinya keren abis..<br><br>" + 
		"Aplikasi ini dikembangkan oleh mas Farhan, mas Vebby, dan saya sendiri.<br><br>"+
		"<a href='https://loopprentice.id' target='__blank'>Kunjungi loopprentice.id</a>"
	},
	{
		id: 1,
		header: "DigiSquad",
		body: "DigiSquad merupakan website di mana anak-anak muda dapat ikut challenge dengan mem-posting konten-konten yang seru dan menarik dari Telkomsel melalui instagram mereka.<br><br>" +
		"Aplikasi ini dikembangkan oleh mas Farhan, mas Vebby, dan saya sendiri.<br><br>"+
		"<a href='https://digisquad.id' target='__blank'>Kunjungi digisquad.id</a>"
	},
	{
		id: 2,
		header: "Unilearning",
		body: "Unilearning merupakan website E-Learning yang digunakan oleh pegawai Unilever Rungkut Surabaya, di mana terdapat fitur training berupa Video, Ujian, dan Hasil Ujian masing-masing pegawai.<br><br>" +
		"Aplikasi ini dikembangkan oleh mas Billy, mbak Selvy Andy, dan saya sendiri.<br><br>"+
		"<a href='http://unilearning.id' target='__blank'>Kunjungi unilearning.id</a>"
	},
	{
		id: 3,
		header: "My Nami",
		body: "My Nami merupakan aplikasi berbasis Android yang digunakan oleh pegawai Telkomsel untuk merekap data penjualan kartu perdana.<br><br>" +
		"Aplikasi ini dikembangkan oleh mas Vebby dan saya sendiri."
	},
	{
		id: 4,
		header: "Servi",
		body: "Servi merupakan aplikasi berbasis Android yang bergerak di bidang pelayanan jasa transportasi online. " +
		"Aplikasi ini bertujuan sebagai penghubung antara driver pemilik kendaraan dengan customer (penumpang).<br><br>" + 
		"Aplikasi ini dikembangkan oleh mas Fajar (frontend) dan mas Gaffar (backend), sedangkan saya (fullstack) berperan untuk menyempurnakannya."
	},
	{
		id: 5,
		header: "Groof",
		body: "Groof adalah sebuah sistem hidroponik di atas gedung yang berbasis Internet of Things (IoT).<br><br>" +
		"Tim pengembangan Groof, yaitu mas Naufal dan mbak Luthfi bekerja sebagai hardware-developer-nya (seperti pemasangan sensor, pemrograman mikrokontroler, solder-menyolder, dll). " +
		"Sedangkan mas Billy dan saya bekerja software-developer, saya di bagian frontend nya."
	},
	{
		id: 6,
		header: "Miko and Sidog",
		body: "Miko and Sidog merupakan game yang ditujukan untuk meramaikan event MAGE 2018 (Multimedia and Game Event 2018). <br>" +
		"Game ini dikembangkan oleh divisi Desain & Web MAGE 2018, mas Habib sebagai design artist-nya, mas Billy dan saya sebagai programernya. <br><br>" +
		"Source code dapat dilihat pada link berikut <a href='https://github.com/9nine9/miko' target='__blank'>Lihat Source Code</a>."
	},
	{
		id: 7,
		header: "Pendekin",
		body: "Shorten your link, we serving the highly save for your click on the surfing, my friend..<br><br>" +
		"Source code dapat dilihat pada link berikut <a href='https://github.com/9nine9/pendekin' target='__blank'>Lihat Source Code</a>."
	},
	{
		id: 8,
		header: "Attack of Trash",
		body: "Attack of Trash merupakan game edukasi berbasis Android. "+
		"Game yang mengajarkan kita mengenai seluk-beluk sampah, mulai dari jenis-jenis sampah hingga bahaya sampah yang berbahaya bagi bumi kita. "+
		"Melalui game ini, secara tidak langsung mengajarkan bagaimana kita memilah sampah dan mengolah sampah secara baik dan benar. <br><br>"+
		"Tim yang mengembangkan game ini ada mas Billy dan saya."
	},
	{
		id: 9,
		header: "SoulS",
		body: "SoulS adalah game survival horor dengan menerapkan algoritma A* path finding pada NPC (enemy).<br>"+
		"Di sini saya membuat game ini dari awal sampai akhir, dari desain karakter, penerapan algoritma path finding, music composer, dan programming. <br><br>"+
		"Anda dapat mengunduh game tersebut pada link berikut <a href='https://www.dropbox.com/s/74wwizqytll45n9/souls.apk?dl=0' target='__blank'>Download</a>. <br>" + 
		"Source code dapat dilihat pada link berikut <a href='https://github.com/9nine9/sstt-game' target='__blank'>Lihat Source Code</a>."
		
	},
	{
		id: 10,
		header: "Burgerr",
		body: "Burgerr merupakan website order burger secara online, di mana pemesan dapat membuat burger-nya sendiri sesuai keinginan, dengan interaktif order berupa drag and drop.<br><br>"+
		"Source code dapat dilihat pada link berikut <a href='https://github.com/9nine9/Burgerr' target='__blank'>Lihat Source Code</a>."
	}
];