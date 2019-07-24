const listaConveniosPDF = [
  {
    id: 1,
    pdf: 'ACA.pdf',
    nombre: 'ACA Salud'
  },
  {
    id: 2,
    pdf: 'ALL-MEDICINE.pdf',
    nombre: 'ALL MEDICINE S.A.'
  },
  {
    id: 3,
    pdf: 'AMFFA.pdf',
    nombre: 'AMFFA (Asociación Mutual Farmacéutica Florentino Ameghino)'
  },
  {
    id: 4,
    pdf: 'ANDES-SALUD.pdf',
    nombre: 'Andes Salud'
  },
  {
    id: 5,
    pdf: 'APSOT.pdf',
    nombre: 'APSOT (Asociación Personal Superior Organización TECHINT)'
  },
  {
    id: 6,
    pdf: 'ATE.pdf',
    nombre: 'ATE'
  },
  {
    id: 7,
    pdf: 'ATSA.pdf',
    nombre: 'ATSA'
  },
  {
    id: 8,
    pdf: 'BIENESTAR-SALUD.pdf',
    nombre: 'BIENESTAR SALUD'
  },
  {
    id: 9,
    pdf: 'CEMENTERIO-PARQUE-CERRO-DEL-OESTE.pdf',
    nombre: 'CEMENTERIO PARQUE CERRO DEL OESTE'
  },
  {
    id: 10,
    pdf: 'CIMACCoseguro.pdf',
    nombre: 'CIMAC Coseguro'
  },
  {
    id: 11,
    pdf: 'CIMACVIDA.pdf',
    nombre: 'CIMAC Vida (A M CIMAC)'
  },
  /*{
    id: 12,
    pdf: 'CIMACOSPPRA.pdf',
    nombre: 'CIMAC SA – OSPPRA'
  },*/
  {
    id: 13,
    pdf: 'COLMEDCos.pdf',
    nombre: 'COLMED Salud Coseguro'
  },
  {
    id: 14,
    pdf: 'COLMEDSALUD.pdf',
    nombre: 'COLMED Salud'
  },
  {
    id: 15,
    pdf: 'CONSALUD-OSPAT.pdf',
    nombre: 'CONSALUD-OSPAT'
  },
  {
    id: 16,
    pdf: 'DAMSU.pdf',
    nombre: 'DAMSU'
  },
  {
    id: 17,
    pdf: 'FEDERADA-SALUD.pdf',
    nombre: 'FEDERADA SALUD'
  },
  {
    id: 18,
    pdf: 'GALENO.pdf',
    nombre: 'GALENO'
  },
  {
    id: 19,
    pdf: 'INSSJyP-VETERANOSDEGUERRA.pdf',
    nombre: 'INSSJ y P-Veteranos de Guerra'
  },
  {
    id: 20,
    pdf: 'INSSJyP.pdf',
    nombre: 'INSSJ y P'
  },
  {
    id: 21,
    pdf: 'OSTEL.pdf',
    nombre: 'INTEGRACIÓN REGIONAL S.R.L. - OSTEL (Telecomunicaciones)'
  },
  {
    id: 22,
    pdf: 'IOSFA.pdf',
    nombre: 'IOSFA'
  },
  {
    id: 23,
    pdf: 'ITER-MEDICINA-OSAM.pdf',
    nombre: 'ITER MEDICINA S.A. – OSAM (Obra Social de la Actividad Minera)'
  },
  {
    id: 24,
    pdf: 'ITER-MEDICINA.pdf',
    nombre: 'ITER MEDICINA S.A. – OSTPCPH y ARA (Obra Social de Trabajadores Pasteleros, Confiteros, Pizeros, Heladeros y Alfajoreros de la República Argentina)'
  },
  {
    id: 25,
    pdf: 'JERARQUICOS-SALUD.pdf',
    nombre: 'JERARQUICOS SALUD'
  },
  {
    id: 26,
    pdf: 'LANUSSE-ANNECHINI.pdf',
    nombre: 'LANUSSE-ANECCHINNI'
  },
  {
    id: 27,
    pdf: 'MEDICUSMEDICARD.pdf',
    nombre: 'MEDICUS MEDICAR'
  },
  {
    id: 28,
    pdf: 'MEDIFE_AC.pdf',
    nombre: 'MEDIFE AC'
  },
  {
    id: 29,
    pdf: 'MUDAP.pdf',
    nombre: 'MUDAP (Mutual Docentes Agremiados Provinciales)'
  },
  {
    id: 30,
    pdf: 'OBRA-SOCIAL-PROVINCIA.pdf',
    nombre: 'Obra Social Provincia'
  },
  {
    id: 31,
    pdf: 'OMINT.pdf',
    nombre: 'OMINT'
  },
  {
    id: 32,
    pdf: 'OPDEA.pdf',
    nombre: 'OPDEA (Directivos de la Alimentación)'
  },
  {
    id: 33,
    pdf: 'PODER-JUDICIAL.pdf',
    nombre: 'OS Personal del Poder Judicial'
  },
  {
    id: 34,
    pdf: 'POLICIA-FEDERAL.pdf',
    nombre: 'OS Policía Federal'
  },
  {
    id: 35,
    pdf: 'OSAPM.pdf',
    nombre: 'OSAPM (Agentes de Propaganda Média)'
  },
  {
    id: 36,
    pdf: 'OSCA.pdf',
    nombre: 'OSCA (Camioneros)'
  },
  {
    id: 37,
    pdf: 'OSPD-SANIDAD.pdf',
    nombre: 'OS Dirección Sanidad Luis Pasteur'
  },
  {
    id: 38,
    pdf: 'OSDE.pdf',
    nombre: 'OSDE'
  },
  {
    id: 39,
    pdf: 'OSSACRA.pdf',
    nombre: 'OSSACRA'
  },
  {
    id: 40,
    pdf: 'OSDIPP.pdf',
    nombre: 'OSDIPP (Dirección Industria Privada del Petróleo)'
  },
  {
    id: 41,
    pdf: 'OSETyA.pdf',
    nombre: 'OSETyA (Empleados Textiles y Afines)'
  },
  {
    id: 42,
    pdf: 'OSFATLyF.pdf',
    nombre: 'OSFATLyF'
  },
  {
    id: 43,
    pdf: 'OSMATA.pdf',
    nombre: 'OSMATA (Obra Social del Sindicato de Mecánicos y Afines del Transporte Automotor)'
  },
  {
    id: 44,
    pdf: 'OSPATCA.pdf',
    nombre: 'OSPATCA'
  },
  {
    id: 45,
    pdf: 'OSP-Farmacia.pdf',
    nombre: 'OSP de Farmacia'
  },
  {
    id: 46,
    pdf: 'OSPE.pdf',
    nombre: 'OSPe'
  },
  {
    id: 47,
    pdf: 'OSPERyHRA.pdf',
    nombre: 'OSPER y HRA (Obra Social para el Personal de Rentas y Horizontal de la República Argentina)'
  },
  {
    id: 48,
    pdf: 'OSPIM.pdf',
    nombre: 'OSPIM (Personal de la Industria Maderera)'
  },
  {
    id: 49,
    pdf: 'OSPENA.pdf',
    nombre: 'OSPENA - Red de Seguros Médicos'
  },
  {
    id: 50,
    pdf: 'OSPIDA.pdf',
    nombre: 'OSPIDA (Personal Imprentas, Diarios y Afines)'
  },
  {
    id: 51,
    pdf: 'OSPIF.pdf',
    nombre: 'OSPIF'
  },
  {
    id: 52,
    pdf: 'OSPIL.pdf',
    nombre: 'OSPIL'
  },
  /*{
    id: 53,
    pdf: 'OSPEGAP.pdf',
    nombre: 'OSPEGAP'
  },*/
  {
    id: 54,
    pdf: 'OSPPRA.pdf',
    nombre: 'OSPPRA'
  },
  {
    id: 55,
    pdf: 'OSSEG.pdf',
    nombre: 'OSSEG (Seguros) Obra Social de la Actividad de Seguros, Reaseguros, Capitalización y Ahorro y Préstamo para la Vivienda'
  },
  {
    id: 56,
    pdf: 'PAMI.pdf',
    nombre: 'PAMI'
  },
  {
    id: 57,
    pdf: 'PREVENCION-SALUD.pdf',
    nombre: 'Prevención Salud'
  },
  {
    id: 58,
    pdf: 'RED-SOL-OSPSIP.pdf',
    nombre: 'RED SOL – OSPSIP'
  },
  {
    id: 59,
    pdf: 'REDSOM.pdf',
    nombre: 'REDSOM'
  },
  {
    id: 60,
    pdf: 'POLICIA-SANJUAN.pdf',
    nombre: 'S. S. Policía de San Juan'
  },
  {
    id: 61,
    pdf: 'CONFERENCIA-EPISCOPAL.pdf',
    nombre: 'SAN PEDRO Mutual del Clero'
  },
  {
    id: 62,
    pdf: 'SANCOR.pdf',
    nombre: 'SANCOR'
  },
  {
    id: 63,
    pdf: 'SANIP.pdf',
    nombre: 'SANIP OSCOEMA - MEDISALUD'
  },
  {
    id: 64,
    pdf: 'SANIP-COSEGURO.pdf',
    nombre: 'SANIP SALUD Coseguro'
  },
  {
    id: 65,
    pdf: 'SCISSA.pdf',
    nombre: 'SCIS'
  },
  {
    id: 66,
    pdf: 'SERVESALUD.pdf',
    nombre: 'Servesalud'
  },
  {
    id: 67,
    pdf: 'SUOyEM.pdf',
    nombre: 'SUOEM (Sindicato Unión Obreros y Empleados Municipales)'
  },
  {
    id: 68,
    pdf: 'SWISSMEDICAL.pdf',
    nombre: 'SWISS MEDICAL'
  },
  {
    id: 69,
    pdf: 'UDAP.pdf',
    nombre: 'UDAP (Unión Docentes Provinciales)'
  },
  {
    id: 70,
    pdf: 'UNIMED.pdf',
    nombre: 'UNIMED S.A.'
  },
  {
    id: 71,
    pdf: 'UP.pdf',
    nombre: 'UP'
  },
  {
    id: 72,
    pdf: 'UPCN.pdf',
    nombre: 'UPCN (Unión Personal Civil de la Nación)'
  },
  {
    id: 73,
    pdf: 'VENDEDORES-DIARIOS.pdf',
    nombre: 'Unión Vendedores de Diarios'
  },
  {
    id: 74,
    pdf: 'INTEGRACION-REGIONAL.pdf',
    nombre: 'INTEGRACIÓN REGIONAL'
  },
  {
    id: 75,
    pdf: 'ASISTMED.pdf',
    nombre: 'ASISTMED'
  },
  {
    id: 76,
    pdf: 'BRAMED.pdf',
    nombre: 'BRAMED'
  },
]

export default listaConveniosPDF;
