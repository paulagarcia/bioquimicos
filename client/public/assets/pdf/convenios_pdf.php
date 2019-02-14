<?php
session_start();

if (isset($_SESSION['loggedin']) && $_SESSION['loggedin'] == true){
	echo "<h2 id='bienvenido'>Bienvenido<b> <br>" . $_SESSION['username']. "</b></h2>";
}
else
{
	/*echo "Esta pagina es solo para usuarios registrados.";
	echo "<a href='convenios.php'>Inicie Sesi&oacute;n ahora!</a>";
	exit;*/
}

 	$now = time(); // checking the time now when home page starts
 	if($now > $_SESSION['expire']){
		session_destroy();
		header("Location: http://colebiosanjuan.org/index.php/convenios");
		exit;
} ?>


<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width,minimum-scale=1,maximum-scale=1">
  <link rel="stylesheet" href="/templates/jf_calla-exteriors/css/k2.css" type="text/css">
  <link rel="stylesheet" href="/templates/system/css/system.css" type="text/css">
  <link rel="stylesheet" href="/templates/jf_calla-exteriors/css/fonts/stylesheet.css" type="text/css">
  <link rel="stylesheet" href="/templates/jf_calla-exteriors/css/template.css" type="text/css">
  <link rel="stylesheet" href="/templates/jf_calla-exteriors/css/jw_sigpro.css" type="text/css">
  <style>
	.codigos, .actuali{
		float: right;
    	clear: both;
    	width: 33%;
    	text-align: center;
    	padding: 10px;
    	margin-top: 20px;
	}
	.actuali{
		font-size: 17px;
		margin-top: 0;
		padding: 0;
	}
</style>
</head>
<body>
	<!--Lista de Convenios con los links para descarga-->
	<div class="item-page">
		<a class="codigos" href="Codigos-OS-10-15.pdf" target="_blank"><b>Detalle de los códigos de facturación por Obra Social</b></a>
		<a class="codigos" href="UB.pdf" target="_blank"><b>Cuadro Arancelario - UB</b></a>
		<div id="convenios">
			<h3>Hac&eacute; click en los links para ver el detalle de los convenios</h3>
			<ul><!--Lista de convenios -->
				<li><span>>></span><a href="ACA.pdf" target="_blank">ACA Salud</a></li>
				<li><span>>></span><a href="ALL-MEDICINE.pdf" target="_blank">ALL MEDICINE S.A.</a></li>
				<li><span>>></span><a href="AMFFA.pdf" target="_blank">AMFFA (Asociaci&oacute;n Mutual Farmac&eacute;utica Florentino Ameghino)</a></li>
				<li><span>>></span><a href="ANDES-SALUD.pdf" target="_blank">Andes Salud</a></li>
				<li><span>>></span><a href="APSOT.pdf" target="_blank">APSOT (Asociaci&oacute;n Personal Superior Organizaci&oacute;n TECHINT)</a></li>
				<li><span>>></span><a href="ATE.pdf" target="_blank">ATE</a></li>
				<li><span>>></span><a href="ATSA.pdf" target="_blank">ATSA</a></li>
				<li><span>>></span><a href="BIENESTAR-SALUD.pdf" target="_blank">BIENESTAR SALUD</a></li>
				<li><span>>></span><a href="CEMENTERIO-PARQUE-CERRO-DEL-OESTE.pdf" target="_blank">CEMENTERIO PARQUE CERRO DEL OESTE</a></li>
				<li><span>>></span><a href="CIMACCoseguro.pdf" target="_blank">CIMAC Coseguro</a></li>
				<li><span>>></span><a href="CIMACVIDA.pdf" target="_blank">CIMAC Vida (A M CIMAC)</a></li>
				<li><span>>></span><a href="CIMACOSPPRA.pdf" target="_blank">CIMAC SA – OSPPRA</a></li>

				<li><span>>></span><a href="COLMEDCos.pdf" target="_blank">COLMED Salud Coseguro</a></li>
				<li><span>>></span><a href="COLMEDSALUD.pdf" target="_blank">COLMED Salud</a></li>
				<li><span>>></span><a href="CONSALUD-OSPAT.pdf" target="_blank">CONSALUD-OSPAT</a></li>
				<!--li><span>>></span><a href="COVER-OSFATUN.pdf" target="_blank">COVER SALUD – OSFATUN </a></li-->
				<!--li><span>>></span><a href="COVER-OSFE.pdf" target="_blank">COVER SALUD – OSFE (Obra Social Ferroviaria)</a></li-->
				<li><span>>></span><a href="DAMSU.pdf" target="_blank">DAMSU</a></li>
				<!--li><span>>></span><a href="DIBA.pdf" target="_blank">DIBA (Direcci&oacute;n de Bienestar de la Armada)</a></li-->
				<!--li><span>>></span><a href="DGBP-FUERZA-AEREA.pdf" target="_blank">DIGBPFA (Direcci&oacute;n Gral. de Bien. del Personal de Fuerza A&eacute;rea)</a></li-->
				<!--li><span>>></span><a href="AMUVA.pdf" target="_blank">ETSA S.A. OSBARA (OS Boxeadores)</a></li-->
				<!--li><span>>></span><a href="FSST.pdf" target="_blank">F.S.S.T. (Fundaci&oacute;n de Servicios Sociales TECHINT)</a></li-->
				<li><span>>></span><a href="FEDERADA-SALUD.pdf" target="_blank">FEDERADA SALUD</a></li>
				<li><span>>></span><a href="GALENO.pdf" target="_blank">GALENO</a></li>
				<!--li><span>>></span><a href="GAPRESA-Sancor.pdf" target="_blank">GAPRESA S.A. - Sancor OS</a></li-->
				<!--li><span>>></span><a href="GAPRESA-OSSACRA.pdf" target="_blank">GAPRESA S.A. - OSSACRA</a></li-->
				<!--li><span>>></span><a href="HOSPITALESPANOL.pdf" target="_blank">Hospital Espa&ntilde;ol</a></li-->
				<li><span>>></span><a href="INSSJyP-VETERANOSDEGUERRA.pdf" target="_blank">INSSJ y P-Veteranos de Guerra</a></li>
				<li><span>>></span><a href="INSSJyP.pdf" target="_blank">INSSJ y P</a></li>
				<li><span>>></span><a href="OSTEL.pdf" target="_blank">INTEGRACIÓN REGIONAL S.R.L. - OSTEL (Telecomunicaciones)</a></li>
				<!--li><span>>></span><a href="IOSE.pdf" target="_blank">IOSE (Obra Social del Ej&eacute;rcito)</a></li-->
				<li><span>>></span><a href="IOSFA.pdf" target="_blank">IOSFA</a></li>
				<li><span>>></span><a href="ITER-MEDICINA-OSAM.pdf" target="_blank">ITER MEDICINA S.A. – OSAM (Obra Social de la Actividad Minera)</a></li>
				<li><span>>></span><a href="ITER-MEDICINA.pdf" target="_blank">ITER MEDICINA S.A. – OSTPCPH y ARA (Obra Social de Trabajadores Pasteleros, Confiteros, Pizeros, Heladeros y Alfajoreros de la Rep&uacute;blica Argentina)</a></li>
				<li><span>>></span><a href="JERARQUICOS-SALUD.pdf" target="_blank">JERARQUICOS SALUD</a></li>
				<!--li><span>>></span><a href="LANUSSE.pdf" target="_blank">LANUSSE Hnos.</a></li-->
				<li><span>>></span><a href="LANUSSE-ANNECHINI.pdf" target="_blank">LANUSSE-ANECCHINNI</a></li>
				<li><span>>></span><a href="MEDICUSMEDICARD.pdf" target="_blank">MEDICUS MEDICAR</a></li>
				<li><span>>></span><a href="MEDIFE_AC.pdf" target="_blank">MEDIFE AC</a></li>
				<li><span>>></span><a href="MUDAP.pdf" target="_blank">MUDAP (Mutual Docentes Agremiados Provinciales)</a></li>
				<li><span>>></span><a href="OBRA-SOCIAL-PROVINCIA.pdf" target="_blank">Obra Social Provincia</a></li>
				<!--li><span>>></span><a href="PROVINCIA-Monto-Fijo.pdf" target="_blank">Obra Social Provincia Monto Fijo</a></li>
				<li><span>>></span><a href="PROVINCIA-FueraMontoFijo.pdf" target="_blank">Obra Social Provincia Fuera de Monto Fijo</a></li-->
				<li><span>>></span><a href="OMINT.pdf" target="_blank">OMINT</a></li>
				<li><span>>></span><a href="OPDEA.pdf" target="_blank">OPDEA (Directivos de la Alimentaci&oacute;n)</a></li>
				<li><span>>></span><a href="PODER-JUDICIAL.pdf" target="_blank">OS Personal del Poder Judicial</a></li>
				<li><span>>></span><a href="POLICIA-FEDERAL.pdf" target="_blank">OS Polic&iacute;a Federal</a></li>
				<li><span>>></span><a href="OSAPM.pdf" target="_blank">OSAPM (Agentes de Propaganda M&eacute;dia)</a></li>
				<li><span>>></span><a href="OSCA.pdf" target="_blank">OSCA (Camioneros)</a></li>
				<li><span>>></span><a href="OSPD-SANIDAD.pdf" target="_blank">OS Direcci&oacute;n Sanidad Luis Pasteur</a></li>
				<li><span>>></span><a href="OSDE.pdf" target="_blank">OSDE</a></li>
				<li><span>>></span><a href="OSSACRA.pdf" target="_blank">OSSACRA</a></li>
				<li><span>>></span><a href="OSDIPP.pdf" target="_blank">OSDIPP (Direcci&oacute;n Industria Privada del Petr&oacute;leo)</a></li>
				<li><span>>></span><a href="OSETyA.pdf" target="_blank">OSETyA (Empleados Textiles y Afines)</a></li>
				<li><span>>></span><a href="OSFATLyF.pdf" target="_blank">OSFATLyF</a></li>
				<li><span>>></span><a href="OSMATA.pdf" target="_blank">OSMATA (Obra Social del Sindicato de Mec&aacute;nicos y Afines del Transporte Automotor)</a></li>
				<li><span>>></span><a href="OSPATCA.pdf" target="_blank">OSPATCA</a></li>
				<li><span>>></span><a href="OSP-Farmacia.pdf" target="_blank">OSP de Farmacia</a></li>
				<li><span>>></span><a href="OSPE.pdf" target="_blank">OSPe</a></li>
				<li><span>>></span><a href="OSPERyHRA.pdf" target="_blank">OSPER y HRA (Obra Social para el Personal de Rentas y Horizontal de la Rep&uacute;blica Argentina)</a></li>
				<li><span>>></span><a href="OSPIM.pdf" target="_blank">OSPIM (Personal de la Industria Maderera)</a></li>
				<!--li><span>>></span><a href="OSPeCon.pdf" target="_blank">OSPeCon (Personal de la Construcci&oacute;n)</a></li-->
				<li><span>>></span><a href="OSPENA.pdf" target="_blank">OSPENA - Red de Seguros M&eacute;dicos</a></li>
				<li><span>>></span><a href="OSPIDA.pdf" target="_blank">OSPIDA (Personal Imprentas, Diarios y Afines)</a></li>
				<li><span>>></span><a href="OSPIF.pdf" target="_blank">OSPIF</a></li>
				<li><span>>></span><a href="OSPIL.pdf" target="_blank">OSPIL</a></li>
				<!--li><span>>></span><a href="OSPIQyP.pdf" target="_blank">OSPIQyP</a></li-->
				<li><span>>></span><a href="OSPEGAP.pdf" target="_blank">OSPEGAP</a></li>
				<li><span>>></span><a href="OSPPRA.pdf" target="_blank">OSPPRA</a></li>
				<li><span>>></span><a href="OSSEG.pdf" target="_blank">OSSEG (Seguros) Obra Social de la Actividad de Seguros, Reaseguros, Capitalizaci&oacute;n y Ahorro y Pr&eacute;stamo para la Vivienda</a></li>
				<li><span>>></span><a href="PAMI.pdf" target="_blank">PAMI</a></li>
				<li><span>>></span><a href="PREVENCION-SALUD.pdf" target="_blank">Prevenci&oacute;n Salud</a></li>
				<li><span>>></span><a href="RED-SOL-OSPSIP.pdf" target="_blank">RED SOL – OSPSIP (Personal de la Industria del Pl&aacute;stico)</a></li>
				<li><span>>></span><a href="REDSOM.pdf" target="_blank">REDSOM</a></li>
				<li><span>>></span><a href="POLICIA-SANJUAN.pdf" target="_blank">S. S. Polic&iacute;a de San Juan</a></li>
				<li><span>>></span><a href="CONFERENCIA-EPISCOPAL.pdf" target="_blank">SAN PEDRO Mutual del Clero</a></li>
				<li><span>>></span><a href="SANCOR.pdf" target="_blank">SANCOR</a></li>
				<li><span>>></span><a href="SANIP.pdf" target="_blank">SANIP OSCOEMA - MEDISALUD</a></li>
				<li><span>>></span><a href="SANIP-COSEGURO.pdf" target="_blank">SANIP SALUD Coseguro</a></li>
				<li><span>>></span><a href="SCISSA.pdf" target="_blank">SCIS</a></li>
				<li><span>>></span><a href="SERVESALUD.pdf" target="_blank">Servesalud</a></li>
				<li><span>>></span><a href="SUOyEM.pdf" target="_blank">SUOEM (Sindicato Uni&oacute;n Obreros y Empleados Municipales)</a></li>
				<li><span>>></span><a href="SWISSMEDICAL.pdf" target="_blank">SWISS MEDICAL</a></li>
				<li><span>>></span><a href="UDAP.pdf" target="_blank">UDAP (Uni&oacute;n Docentes Provinciales)</a></li>
				<li><span>>></span><a href="UNIMED.pdf" target="_blank">UNIMED S.A.</a></li>
				<li><span>>></span><a href="UP.pdf" target="_blank">UP</a></li>
				<li><span>>></span><a href="UPCN.pdf" target="_blank">UPCN (Uni&oacute;n Personal Civil de la Naci&oacute;n)</a></li>
				<li><span>>></span><a href="VENDEDORES-DIARIOS.pdf" target="_blank">Uni&oacute;n Vendedores de Diarios</a></li>
			</ul>
		</div>
	</div>
</body>
</html>
