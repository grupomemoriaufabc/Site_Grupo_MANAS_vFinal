export type PublicationType = "artigo" | "capitulo" | "midia";

export interface Publication {
  year: number;
  title: string;
  authors: string;
  journal: string;
  type: PublicationType;
  url?: string;
  image?: string;
  summary?: string;
}

export const publications: Publication[] = [
  // ========== ARTIGOS ==========
  {
    year: 2024,
    type: "artigo",
    title: "Neuropsychopharmacological Induction of (Lucid) Dreams: A Narrative Review",
    authors: "Oldoni A.A., Bacchi A.D., Mendes F.R., Tiba P.A., Mota-Rolim S.",
    journal: "Brain Sciences, v. 14, p. 426",
    url: "https://doi.org/10.3390/brainsci14050426",
  },
  {
    year: 2024,
    type: "artigo",
    title:
      "Insular and prelimbic cortices control behavioral accuracy and precision in a temporal decision-making task in rats",
    authors: "Nepomoceno E.B., Rodrigues S., De Melo K.S., Ferreira T.L., Freestone D., Caetano M.S.",
    journal: "Behavioural Brain Research, v. 465, p. 114961",
    url: "https://doi.org/10.1016/j.bbr.2024.114961",
  },
  {
    year: 2022,
    type: "artigo",
    title: "Remote contextual fear retrieval engages activity from salience network regions in rats",
    authors:
      "Dos Santos Corrêa M., Grisanti G.D.V., Franciscatto I.A.F., Tarumoto T.S.A., Tiba P.A., Ferreira T.L., Fornari R.V.",
    journal: "Neurobiology of Stress, v. 18, p. 100459",
    url: "https://doi.org/10.1016/j.ynstr.2022.100459",
  },
  {
    year: 2021,
    type: "artigo",
    title:
      "Corticosterone differentially modulates time-dependent fear generalization following mild or moderate fear conditioning training in rats",
    authors: "Dos Santos Corrêa M., Vaz B.S., Menezes B.S., Ferreira T.L., Tiba P.A., Fornari R.V.",
    journal: "Neurobiology of Learning and Memory, v. 184, p. 107487",
    url: "https://doi.org/10.1016/j.nlm.2021.107487",
  },
  {
    year: 2021,
    type: "artigo",
    title: "The posterior insular cortex is necessary for the consolidation of tone fear conditioning",
    authors: "De Paiva J.P.Q., Bueno A.P.A., Dos Santos Corrêa M., Oliveira M.G.M., Ferreira T.L., Fornari R.V.",
    journal: "Neurobiology of Learning and Memory, v. 179, p. 107402",
    url: "https://pubmed.ncbi.nlm.nih.gov/33581316/",
  },
  {
    year: 2021,
    type: "artigo",
    title: "Decrease of ARC protein expression in the striatum after tone fear conditioning",
    authors:
      "Antonio B., Lee K.S., Domingues L.P., Daldegan-Bueno D., Ferreira T.L., Kramer-Soares J.C., Oliveira M.G.M.",
    journal: "Revista de Neurociências, v. 29, p. 1-22",
    url: "https://cientometria.pesquisa.ufabc.edu.br/UFABC-professores/membro-2557253808540866.html",
  },
  {
    year: 2019,
    type: "artigo",
    title:
      "Relationship between footshock intensity, post-training corticosterone release and contextual fear memory specificity over time",
    authors: "Corrêa M.S., Vaz B.S., Grisanti G.D.V., De Paiva J.P.Q., Tiba P.A., Fornari R.V.",
    journal: "Psychoneuroendocrinology, v. 110, p. 104447",
    url: "https://doi.org/10.1016/j.psyneuen.2019.104447",
  },
  {
    year: 2019,
    type: "artigo",
    title:
      "Muscimol injection into the substantia nigra but not globus pallidus affects prepulse inhibition and startle reflex",
    authors: "Rodrigues S., Ferreira T.L.",
    journal: "Neuropharmacology, v. 162, p. 107796",
    url: "https://doi.org/10.1016/j.neuropharm.2019.107796",
  },
  {
    year: 2019,
    type: "artigo",
    title: "Intracerebral Injection of Streptozotocin to Model Alzheimer Disease in Rats",
    authors: "Moreira-Silva D., Vizin R., Martins T., Ferreira T.L., Almeida M., Carrettiero D.",
    journal: "Bio-Protocol, v. 9",
    url: "https://doi.org/10.21769/BioProtoc.3397",
  },
  {
    year: 2018,
    type: "artigo",
    title: "High corticosterone after olfactory social stimuli in a rodent model of traumatic stress",
    authors: "Girardi C.E.N., Llobet G.B., Suchecki D., Tiba P.A.",
    journal: "Psychology & Neuroscience, v. 11, p. 105-115",
    url: "https://doi.org/10.1037/pne0000128",
  },
  {
    year: 2018,
    type: "artigo",
    title:
      "Network supporting contextual fear learning after dorsal hippocampal damage has increased dependence on retrosplenial cortex",
    authors: "Coelho C.A.O., Ferreira T.L., Soares J.C.K., Sato J.R., Oliveira M.G.M.",
    journal: "PLOS Computational Biology, v. 14",
    url: "https://doi.org/10.1371/journal.pcbi.1006207",
  },
  {
    year: 2018,
    type: "artigo",
    title: "A Neural Circuit for Gut-Induced Reward",
    authors: "Han W., Tellez L.A., Perkins M.H., Perez I.O., Ferreira T.L., et al.",
    journal: "Cell, v. 175, p. 1-14",
    url: "https://doi.org/10.1016/j.cell.2018.08.049",
  },
  {
    year: 2018,
    type: "artigo",
    title: "Anandamide Effects in a Streptozotocin-Induced Alzheimer's Disease-Like Sporadic Dementia in Rats",
    authors:
      "Moreira-Silva D., Carrettiero D.C., Oliveira A., Rodrigues S., Santos-Lopes J., Canas P.M., Cunha R.A., Almeida M.C., Ferreira T.L.",
    journal: "Frontiers in Neuroscience, v. 12",
    url: "https://doi.org/10.3389/fnins.2018.00653",
  },
  {
    year: 2017,
    type: "artigo",
    title:
      "Noradrenergic activation of the basolateral amygdala maintains hippocampus-dependent accuracy of remote memory",
    authors:
      "Atucha E., Vukojevic V., Fornari R.V., Ronzoni G., Demougin P., Peter F., Atsak P., Coolen M.W., Papassotiropoulos A., McGaugh J.L., De Quervain D.J.-F., Roozendaal B.",
    journal: "PNAS, v. 114, p. 9176-9181",
    url: "https://doi.org/10.1073/pnas.1710819114",
  },
  {
    year: 2017,
    type: "artigo",
    title:
      "Corticosterone administration after a single-trial contextual fear conditioning does not influence the strength and specificity of recent and remote memory in rats",
    authors: "Bueno A.P.A., De Paiva J.P.Q., Corrêa M.S., Tiba P.A., Fornari R.V.",
    journal: "Physiology & Behavior, v. 171, p. 175-180",
    url: "https://doi.org/10.1016/j.physbeh.2017.01.011",
  },
  {
    year: 2017,
    type: "artigo",
    title: "Dorsal striatum D1-expressing neurons are involved with sensorimotor gating on prepulse inhibition test",
    authors: "Rodrigues S., Salum C., Ferreira T.L.",
    journal: "Journal of Psychopharmacology, v. 1",
    url: "https://doi.org/10.1177/0269881116686879",
  },
  {
    year: 2016,
    type: "artigo",
    title: "Striatal Dopamine Links Gastrointestinal Rerouting to Altered Sweet Appetite",
    authors: "Han W., Tellez L.A., Niu J., Medina S., Ferreira T.L., et al.",
    journal: "Cell Metabolism, v. 23, p. 103-112",
    url: "https://doi.org/10.1016/j.cmet.2015.10.009",
  },
  {
    year: 2016,
    type: "artigo",
    title: "Separate circuitries encode the hedonic and nutritional values of sugar",
    authors:
      "Tellez L.A., Han W., Zhang X., Ferreira T.L., Perez I.O., Shammah-Lagnado S.J., Van Den Pol A.N., Araujo I.E.",
    journal: "Nature Neuroscience, v. 19, p. 465-470",
    url: "https://doi.org/10.1038/nn.4224",
  },
  {
    year: 2015,
    type: "artigo",
    title: "Endocannabinoid signaling integrates multiple stress hormone effects on memory consolidation",
    authors: "Atsak P., Hauer D., Campolongo P., Schelling G., Fornari R.V., Roozendaal B.",
    journal: "Psychoneuroendocrinology, v. 61, p. 5",
    url: "https://doi.org/10.1016/j.psyneuen.2015.07.400",
  },
  {
    year: 2015,
    type: "artigo",
    title:
      "Pre-test metyrapone impairs memory recall in fear conditioning tasks: lack of interaction with β-adrenergic activity",
    authors: "Careaga M.B.L., Tiba P.A., Ota S.M., Suchecki D.",
    journal: "Frontiers in Behavioral Neuroscience, v. 9, p. 1-11",
    url: "https://doi.org/10.3389/fnbeh.2015.00051",
  },
  {
    year: 2014,
    type: "artigo",
    title:
      "Endocannabinoid Signaling within the Basolateral Amygdala Integrates Multiple Stress Hormone Effects on Memory Consolidation",
    authors: "Atsak P., Hauer D., Campolongo P., Schelling G., Fornari R.V., Roozendaal B.",
    journal: "Neuropsychopharmacology, v. doi:10.1038/np",
    url: "https://doi.org/10.1038/npp.2014.334",
  },
  {
    year: 2014,
    type: "artigo",
    title:
      "The roles of the nucleus accumbens core, dorsomedial striatum, and dorsolateral striatum in learning: Performance and extinction of Pavlovian fear-conditioned responses and instrumental avoidance responses",
    authors:
      "Wendler E., Gaspar J.C.C., Ferreira T.L., Barbiero J.K., Andreatini R., Vital M.A.B.F., Blaha C.D., Winn P., Da Cunha C.",
    journal: "Neurobiology of Learning and Memory, v. 109, p. 27-36",
    url: "https://doi.org/10.1016/j.nlm.2013.12.001",
  },
  {
    year: 2014,
    type: "artigo",
    title:
      "Effects of sleep deprivation on different phases of memory in the rat: dissociation between contextual and tone fear conditioning tasks",
    authors: "Rossi V.C., Tiba P.A., Moreira K.D.M., Ferreira T.L., Oliveira M.G.M., Suchecki D.",
    journal: "Frontiers in Behavioral Neuroscience, v. 8, p. 389",
    url: "https://doi.org/10.3389/fnbeh.2014.00389",
  },
  {
    year: 2013,
    type: "artigo",
    title:
      "Hippocampal NMDA receptor blockade impairs CREB phosphorylation in amygdala after contextual fear conditioning",
    authors: "Ferreira T.L., Coelho C.A.O., Soares J.C.K., Oliveira M.G.M.",
    journal: "Hippocampus",
    url: "https://doi.org/10.1002/hipo.22118",
  },
  {
    year: 2013,
    type: "artigo",
    title:
      "Inactivation of muscarinic receptors impairs place and response learning: Implications for multiple memory systems",
    authors: "Soares J.C.K., Oliveira M.G.M., Ferreira T.L.",
    journal: "Neuropharmacology, v. 73, p. 320-326",
    url: "https://doi.org/10.1016/j.neuropharm.2013.06.009",
  },
  {
    year: 2013,
    type: "artigo",
    title:
      "Sleep deprivation alters phosphorylated CREB levels in the amygdala: Relationship with performance in a fear conditioning task",
    authors:
      "Pinho N., Moreira K.M., Hipolide D.C., Sinigaglia-Coimbra R., Ferreira T.L., Nobrega J.N., Tufik S., Oliveira M.G.M.",
    journal: "Behavioural Brain Research, v. 236, p. 221-224",
    url: "https://doi.org/10.1016/j.bbr.2012.08.043",
  },
  {
    year: 2013,
    type: "artigo",
    title: "Lithium Prevents REM Sleep Deprivation-Induced Impairments on Memory Consolidation",
    authors: "Ota S.M., Moreira K.M., Suchecki D., Oliveira M.G.M., Tiba P.A.",
    journal: "Sleep, v. 36, p. 1677-1684",
    url: "https://doi.org/10.5665/sleep.3126",
  },
  {
    year: 2013,
    type: "artigo",
    title: "Sleep pattern and learning in knockdown mice with reduced cholinergic neurotransmission",
    authors: "Queiroz C.M., Tiba P.A., Moreira K.M., et al.",
    journal: "Brazilian Journal of Medical and Biological Research, v. 46, p. 844-854",
    url: "https://doi.org/10.1590/1414-431X20133102",
  },
  {
    year: 2013,
    type: "artigo",
    title:
      "Contextual exploration previous to an aversive event predicts long-term emotional consequences of severe stress",
    authors: "Girardi C.E.N., Tiba P.A., Llobet G.B., Levin R., Abilio V.C., Suchecki D.",
    journal: "Frontiers in Behavioral Neuroscience, v. 7, p. 134",
    url: "https://doi.org/10.3389/fnbeh.2013.00134",
  },
  {
    year: 2012,
    type: "artigo",
    title: "Rodent Stereotaxic Surgery and Animal Welfare Outcome Improvements for Behavioral Neuroscience",
    authors:
      "Fornari R.V., Wichmann R., Atsak P., Atucha E., Barsegyan A., Beldjoud H., Messanvi F., Thuring C.M.A., Roozendaal B.",
    journal: "JoVE, v. 59, p. e3528",
    url: "https://doi.org/10.3791/3528",
  },
  {
    year: 2012,
    type: "artigo",
    title:
      "Involvement of the insular cortex in regulating glucocorticoid effects on memory consolidation of inhibitory avoidance training",
    authors: "Fornari R.V., Wichmann R., Atucha E., Desprez T., Eggens-Meijer E., Roozendaal B.",
    journal: "Frontiers in Behavioral Neuroscience, v. 6, Article 10",
    url: "https://doi.org/10.3389/fnbeh.2012.00010",
  },
  {
    year: 2012,
    type: "artigo",
    title:
      "Glucocorticoids interact with the noradrenergic arousal system in the nucleus accumbens shell to enhance memory consolidation of both appetitive and aversive taste learning",
    authors: "Wichmann R., Fornari R.V., Roozendaal B.",
    journal: "Neurobiology of Learning and Memory, v. 98, p. 197-205",
    url: "https://doi.org/10.1016/j.nlm.2012.06.004",
  },
  {
    year: 2012,
    type: "artigo",
    title: "REM Sleep Rebound as an Adaptive Response to Stressful Situations",
    authors: "Suchecki D., Tiba P.A., Machado R.B.",
    journal: "Frontiers in Neurology, v. 3, Article 41",
    url: "https://doi.org/10.3389/fneur.2012.00041",
  },
  {
    year: 2011,
    type: "artigo",
    title:
      "Stress during development alters anxiety-like behavior and hippocampal neurotransmission in male and female rats",
    authors:
      "Barbosa Neto J.B., Tiba P.A., Faturi C.B., de Castro-Neto E.F., da Graça Naffah-Mazacoratti M., de Jesus Mari J., de Mello M.F., Suchecki D.",
    journal: "Neuropharmacology, v. 62, p. 518-526",
    url: "https://doi.org/10.1016/j.neuropharm.2011.09.011",
  },
  {
    year: 2010,
    type: "artigo",
    title: "Modafinil prevents inhibitory avoidance memory deficit induced by sleep deprivation in rats",
    authors: "Moreira K.D.M., Ferreira T.L., Hipólide D.C., Fornari R.V., Tufik S., Oliveira M.G.M.",
    journal: "Sleep, v. 33, p. 990-993",
    url: "https://doi.org/10.1093/sleep/33.7.990",
  },
  {
    year: 2010,
    type: "artigo",
    title: "Coping with sleep deprivation: shifts in regional brain activity and learning strategy",
    authors: "Hagewoud R., Havekes R., Tiba P.A., Novati A., Hogenelst K., Weinreder P., Van der Zee E., Meerlo P.",
    journal: "Sleep, v. 33, p. 1465-1473",
    url: "https://doi.org/10.1093/sleep/33.11.1465",
  },
  {
    year: 2010,
    type: "artigo",
    title:
      "Disruptions of the mother-infant relationship and stress-related behaviours: Altered corticosterone secretion does not explain everything",
    authors: "Faturi C.B., Tiba P.A., Kawakami S.E., Catallani B., Kerstens M., Suchecki D.",
    journal: "Neuroscience and Biobehavioral Reviews, v. 34, p. 821-834",
    url: "https://doi.org/10.1016/j.neubiorev.2009.09.002",
  },
  {
    year: 2009,
    type: "artigo",
    title: "Stress-induced sleep rebound: adaptive behavior and possible mechanisms",
    authors: "Suchecki D., Machado R.B., Tiba P.A.",
    journal: "Sleep Science, v. 2, p. 151-160",
    url: "https://www.researchgate.net/publication/228619824_Stress-induced_sleep_rebound_adaptive_behavior_and_possible_mechanisms",
  },
  {
    year: 2008,
    type: "artigo",
    title: "Effects of Nociceptin/Orphanin FQ in the acquisition of contextual and tone fear conditioning in rats",
    authors: "Fornari R.V., Soares J.C.K., Ferreira T.L., Moreira K.D.M., Oliveira M.G.M.",
    journal: "Behavioral Neuroscience, v. 122, p. 98-106",
    url: "https://doi.org/10.1037/0735-7044.122.1.98",
  },
  {
    year: 2008,
    type: "artigo",
    title:
      "The indirect amygdala-dorsal striatum pathway mediates conditioned freezing: Insights on emotional memory networks",
    authors: "Ferreira T.L., Shammah-Lagnado S.J., Bueno O.F.A., Moreira K.D.M., Fornari R.V., Oliveira M.G.M.",
    journal: "Neuroscience, v. 153, p. 84-94",
    url: "https://doi.org/10.1016/j.neuroscience.2008.02.013",
  },
  {
    year: 2008,
    type: "artigo",
    title: "Interaction between glutamatergic-NMDA and cholinergic-muscarinic systems in classical fear conditioning",
    authors: "Figueredo L.Z., Moreira K.D.M., Ferreira T.L., Fornari R.V., Oliveira M.G.M.",
    journal: "Brain Research Bulletin, v. 77, p. 71-76",
    url: "https://doi.org/10.1016/j.brainresbull.2008.05.008",
  },
  {
    year: 2008,
    type: "artigo",
    title: "Long lasting alteration in REM sleep of female rats submitted to long maternal separation",
    authors: "Tiba P.A., Tufik S., Suchecki D.",
    journal: "Physiology & Behavior, v. 93, p. 444-452",
    url: "https://doi.org/10.1016/j.physbeh.2007.10.001",
  },
  {
    year: 2008,
    type: "artigo",
    title: "Glucocorticoids are not responsible for paradoxical sleep deprivation-induced memory impairments",
    authors: "Tiba P.A., Oliveira M.G.M., Rossi V.C., Tufik S., Suchecki D.",
    journal: "Sleep, v. 31, p. 505-515",
    url: "https://doi.org/10.1093/sleep/31.4.505",
  },
  {
    year: 2007,
    type: "artigo",
    title:
      "Effects of brief and long maternal separations on the HPA axis activity and the performance of rats on context and tone fear conditioning",
    authors: "Guijarro J.Z., Tiba P.A., Ferreira T.L., Kawakami S.E., Oliveira M.G.M., Suchecki D.",
    journal: "Behavioural Brain Research, v. 184, p. 101-108",
    url: "https://doi.org/10.1016/j.bbr.2007.06.020",
  },
  {
    year: 2007,
    type: "artigo",
    title: "Does Scopolamine Block the Development of Ethanol-Induced Behavioral Sensitization?",
    authors: "Takahashi S., Fornari R.V., Quadros I.M.H., Oliveira M.G.M., Souza-Formigoni M.L.O.",
    journal: "Alcoholism, Clinical and Experimental Research, v. 31, p. 1482-1489",
    url: "https://doi.org/10.1111/j.1530-0277.2007.00446.x",
  },
  {
    year: 2007,
    type: "artigo",
    title:
      "Repercussões imunológicas dos distúrbios do sono: o eixo hipotálamo-pituitária-adrenal como fator modulador",
    authors: "Palma B.D., Tiba P.A., Machado R.B., Tufik S., Suchecki D.",
    journal: "Revista Brasileira de Psiquiatria, v. 29, p. 33-38",
    url: "https://doi.org/10.1590/S1516-44462007000500007",
  },
  {
    year: 2006,
    type: "artigo",
    title: "Role of muscarinic M1 receptors in inhibitory avoidance and contextual fear conditioning",
    authors: "Soares J.C.K., Fornari R.V., Oliveira M.G.M.",
    journal: "Neurobiology of Learning and Memory, v. 86, p. 188-196",
    url: "https://doi.org/10.1016/j.nlm.2006.02.006",
  },
  {
    year: 2006,
    type: "artigo",
    title: "Fear conditioning performance and NMDA receptor subtypes: NR2A differential expression in the striatum",
    authors: "Schenberg E.E., Ferreira T.L., Figueredo L.Z., Hipolide D.C., Nobrega J.N., Oliveira M.G.M.",
    journal: "Brain Research Bulletin, v. 69, p. 440",
    url: "https://doi.org/10.1016/j.brainresbull.2006.02.010",
  },
  {
    year: 2006,
    type: "artigo",
    title:
      "Protein synthesis inhibition in the basolateral amygdala following retrieval does not impair expression of morphine-associated conditioned place preference",
    authors: "Yim A.J., Moraes C.R., Ferreira T.L., Oliveira M.G.M.",
    journal: "Behavioural Brain Research, v. 171, p. 162",
    url: "https://doi.org/10.1016/j.bbr.2006.03.031",
  },
  {
    year: 2005,
    type: "artigo",
    title: "Interaction between M1-muscarinic and glutamatergic NMDA receptors on an inhibitory avoidance task",
    authors: "Moreira K.D.M., Ferreira T.L., Fornari R.V., Figueredo L.Z., Oliveira M.G.M.",
    journal: "Brain Research Bulletin, v. 67, n.6, p. 504-508",
    url: "https://doi.org/10.1016/j.brainresbull.2005.07.019",
  },
  {
    year: 2004,
    type: "artigo",
    title: "Effects of maternal separation on baseline sleep and cold-induced sleep rebound in adult Wistar rats",
    authors: "Tiba P.A., Tufik S., Suchecki D.",
    journal: "Sleep, v. 27, n.6, p. 1146-1153",
    url: "https://doi.org/10.1093/sleep/27.6.1146",
  },
  {
    year: 2003,
    type: "artigo",
    title: "Is behavioral sensitization to ethanol associated with contextual conditioning in mice?",
    authors: "Quadros I.M.H., Souza-Formigoni M.L.O., Fornari R.V., Nóbrega J.N., Oliveira M.G.M.",
    journal: "Behavioural Pharmacology, v. 14, n.2, p. 129-136",
    url: "https://doi.org/10.1097/00008877-200303000-00004",
  },
  {
    year: 2003,
    type: "artigo",
    title: "Effects of early handling on basal and stress-induced sleep parameters in rats",
    authors: "Tiba P.A., Palma B.D., Suchecki D., Tufik S.",
    journal: "Brain Research, v. 975, p. 158-166",
    url: "https://doi.org/10.1016/S0006-8993(03)02630-1",
  },
  {
    year: 2003,
    type: "artigo",
    title: "Effects of dorsal striatum lesion in tone fear conditioning and contextual fear conditioning",
    authors: "Ferreira T.L., Moreira K.D.M., Ikeda D.C., Bueno O.F.A., Oliveira M.G.M.",
    journal: "Brain Research, v. 987, p. 17-24",
    url: "https://doi.org/10.1016/S0006-8993(03)03217-7",
  },
  {
    year: 2002,
    type: "artigo",
    title: "Hormonal and Behavioural Responses of Paradoxical Sleep-Deprived Rats to the Elevated Plus Maze",
    authors: "Suchecki D., Tiba P.A., Tufik S.",
    journal: "Journal of Neuroendocrinology, v. 14, n.7, p. 549-554",
    url: "https://doi.org/10.1046/j.1365-2826.2002.00812.x",
  },
  {
    year: 2002,
    type: "artigo",
    title: "Paradoxical sleep deprivation facilitates subsequent corticosterone response to a mild stressor in rats",
    authors: "Suchecki D., Tiba P.A., Tufik S.",
    journal: "Neuroscience Letters, v. 320, p. 45-48",
    url: "https://doi.org/10.1016/S0304-3940(02)00024-1",
  },
  {
    year: 2000,
    type: "artigo",
    title: "Effects of the selective M1 muscarinic receptor antagonist dicyclomine on emotional memory",
    authors: "Fornari R.V., Moreira K.D.M., Oliveira M.G.M.",
    journal: "Learning & Memory, v. 7, n.5, p. 287-292",
    url: "https://doi.org/10.1101/lm.34900",
  },
  {
    year: 2000,
    type: "artigo",
    title:
      "Anxiety-induced antinociception in mice: effects of systemic and intra-amygdala administration of 8-OH-DPAT and midazolam",
    authors: "Souza R.L.N., Canto-de-Souza A., da-Costa M., Fornari R.V., Graeff F.G., Pela I.R.",
    journal: "Psychopharmacology, v. 150, n.3, p. 300-310",
    url: "https://doi.org/10.1007/s002130000428",
  },

  // ========== CAPÍTULOS ==========
  {
    year: 2023,
    type: "capitulo",
    title:
      "On the interplay among endocannabinoid, noradrenergic, and glucocorticoid systems: Evidence from aversive memory studies",
    authors: "Dos Santos Corrêa M., Fornari R.V., Stern C.A.J., Bertoglio L.J., Gazarini L.",
    journal: "In: Neurobiology and Physiology of the Endocannabinoid System. Academic Press Elsevier, p. 253-267",
    url: "",
  },
  {
    year: 2021,
    type: "capitulo",
    title: "PIBID/UFABC-AÇÃO AFIRMATIVA: criando as condições para uma docência transdisciplinar",
    authors: "Piza S., Laurentino K.B., Tiba P.A.",
    journal:
      "In: Experiências Inovadoras em Resposta aos Desafios da Educação Superior no Brasil. Editora UFPB, p. 139-165",
    url: "",
  },
  {
    year: 2020,
    type: "capitulo",
    title:
      "Neurobiological Mechanisms of Stress and Glucocorticoid Effects on Learning and Memory: Implications for Stress Disorders on Earth and in Space (2nd ed.)",
    authors: "Fornari R.V., Aerni A., De Quervain D.J.-F., Roozendaal B.",
    journal: "In: Stress Challenges and Immunity in Space. 2ed. Springer, Cham, p. 95-122",
    url: "",
  },
  {
    year: 2018,
    type: "capitulo",
    title: "Recent Advances in Alzheimer Research — Cellular Mechanisms in Alzheimer's Disease",
    authors: "Moreira-Silva D., Rodrigues S., Ferreira T.L.",
    journal: "Bentham Science Publishers, v. 2, 209p.",
    url: "",
  },
  {
    year: 2018,
    type: "capitulo",
    title: "Neuroeducação em foco",
    authors: "Carthery-Goulart M.T., Tiba P.A.",
    journal: "In: Nascimento e desenvolvimento da ciência moderna. Livraria da Física, p. 109-124",
    url: "",
  },
  {
    year: 2018,
    type: "capitulo",
    title: "Projeto de revisão de matemática e física: tópicos do ensino médio",
    authors: "Miguel A.P.S., Oliveira C.R., Silva C.H.P., et al., Tiba P.A.",
    journal: "In: Gestão do ensino de graduação. Editora UFPB, p. 213-228",
    url: "",
  },
  {
    year: 2016,
    type: "capitulo",
    title: "CuriosaMente: descobrindo a neurociência",
    authors: "Paiva J., Rodrigues S., Moreira-Silva D., Ferreira T.L.",
    journal: "UFABC, Santo André, v. 1, 328p.",
    url: "",
  },
  {
    year: 2012,
    type: "capitulo",
    title:
      "Neurobiological mechanisms of stress and glucocorticoid effects on learning and memory: implications for stress disorders on earth and in space (1st ed.)",
    authors: "Fornari R.V., Aerni A., Roozendaal B., Quervain D.",
    journal: "In: Stress Challenges and Immunity in Space. 1ed. Springer Verlag, p. 47-69",
    url: "",
  },
  {
    year: 2007,
    type: "capitulo",
    title: "Animal models of insomnia",
    authors: "Tiba P.A., Tufik S., Suchecki D.",
    journal: "In: Sleep and Psychosomatic Medicine. Taylor & Francis Group, p. 231-240",
    url: "",
  },
  {
    year: 2006,
    type: "capitulo",
    title: "Métodos para avaliar drogas que alteram o processo de aprendizagem-memória",
    authors: "Fornari R.V., Maior F.N.S., Oliveira M.G.M.",
    journal: "In: Psicofarmacologia — Fundamentos Práticos. Guanabara Koogan, p. 227-236",
    url: "",
  },

  // ========== MÍDIA ==========
  {
    year: 2021,
    type: "midia",
    title: "Semana do Cérebro 2021 — Neurocomenta: Mitos e verdades sobre memória em 'Divertidamente'",
    authors: "MANAS Lab",
    journal: "YouTube",
    url: "https://www.youtube.com/watch?v=_n5R2StAOe0",
  },
  {
    year: 2021,
    type: "midia",
    title: "Live MANAS Lab",
    authors: "MANAS Lab",
    journal: "YouTube",
    url: "https://www.youtube.com/live/lEkQ-9ew0XQ?si=9mvewP9sBOs0LSnv",
  },
  {
    year: 2020,
    type: "midia",
    title: "Podcast: Como o estresse durante o isolamento afeta nossa memória",
    authors: "MANAS Lab",
    journal: "UFABC Divulga Ciência, v. 3, n. 6, p. 2",
    url: "https://ufabcdivulgaciencia.proec.ufabc.edu.br/2020/06/03/podcast-como-o-estresse-durante-o-isolamento-afeta-nossa-memoria-v-3-n-6-p-2-2020/",
  },
    {
    year: 2018,
    title: "Globo Repórter — A sedução e os perigos do açúcar",
    authors: "MANAS Lab",
    journal: "TV Globo / G1",
    type: "midia",
    url: "https://g1.globo.com/globo-reporter/noticia/2018/06/globo-reporter-mostra-seducao-e-os-perigos-do-acucar.html",
  },
  {
    year: 2025,
    title: "Reel MANAS Lab — Instagram",
    authors: "MANAS Lab",
    journal: "Instagram",
    type: "midia",
    url: "https://www.instagram.com/reel/DbvdDyQjNUu/",
  },
  {
    year: 2016,
    title: "Cérebro induz a escolha de alimentos calóricos para armazenar energia",
    authors: "MANAS Lab",
    journal: "Agência FAPESP",
    type: "midia",
    url: "https://agencia.fapesp.br/cerebro-induz-a-escolha-de-alimentos-caloricos-para-armazenar-energia/22658",
  },
  {
    year: 2016,
    title: "Sensação de prazer e valor nutritivo do açúcar evocam circuitos neuronais distintos",
    authors: "MANAS Lab",
    journal: "Revista Pesquisa FAPESP",
    type: "midia",
    url: "https://revistapesquisa.fapesp.br/sensacao-de-prazer-e-valor-nutritivo-do-acucar-evocam-circuitos-neuronais-distintos/",
  },
  {
    year: 2016,
    title: "Cirurgia bariátrica reduz apetite por açúcar",
    authors: "MANAS Lab",
    journal: "Agência FAPESP",
    type: "midia",
    url: "https://agencia.fapesp.br/cirurgia-bariatrica-reduz-apetite-por-acucar/22515",
  },
];
