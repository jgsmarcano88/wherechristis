const entries = [
  {
    verse:
      '"Affectionnez-vous aux choses d\u2019en haut, et non à celles qui sont sur la terre."',
    reference: "Colossiens 3:2",
    meditation:
      "Le monde passera la journée à tirer tes yeux vers le bas — vers l\u2019inquiétude, la comparaison, l\u2019accumulation. Mais rien de cela n\u2019est ta maison. Tu appartiens à un royaume inébranlable, et à un Roi qui ne s\u2019inquiète pas. Lève là tes yeux.",
    question:
      "Quelle est une chose que je pourrais faire aujourd\u2019hui qui comptera encore dans dix mille ans ?",
  },
  {
    verse:
      '"parce que nous regardons, non point aux choses visibles, mais à celles qui sont invisibles ; car les choses visibles sont passagères, et les invisibles sont éternelles."',
    reference: "2 Corinthiens 4:18",
    meditation:
      "Tout ce que tes yeux voient aujourd\u2019hui est en train de passer. Le projet, l\u2019inquiétude, la nouvelle — tout cela s\u2019efface. Mais ce que tes yeux ne voient pas — l\u2019amour de Christ, la promesse du ciel, l\u2019œuvre de Dieu dans les cœurs — cela dure pour toujours. Regarde là.",
    question:
      "Qu\u2019est-ce qui occupe mon attention aujourd\u2019hui et qui sera déjà oublié la semaine prochaine ?",
  },
  {
    verse:
      '"Ne vous amassez pas des trésors sur la terre, où la teigne et la rouille détruisent, et où les voleurs percent et dérobent ; mais amassez-vous des trésors dans le ciel."',
    reference: "Matthieu 6:19-20",
    meditation:
      "Tout ce que tu accumules ici peut être volé, rouillé ou oublié. Mais un acte de bonté fait au nom de Christ, une prière murmurée, un pardon accordé — cela est déposé là où rien ne rouille. Tu peux envoyer des trésors en avant aujourd\u2019hui.",
    question:
      "Qu\u2019est-ce que je retiens étroitement et qui ne peut de toute façon pas me suivre ?",
  },
  {
    verse:
      '"Mais notre cité à nous est dans les cieux, d\u2019où nous attendons aussi comme Sauveur le Seigneur Jésus-Christ."',
    reference: "Philippiens 3:20",
    meditation:
      "Tu vis ici, mais tu n\u2019es pas d\u2019ici. Ta citoyenneté est au ciel, et ton Roi va bientôt venir. Tu n\u2019es pas un résident permanent — tu es un ambassadeur envoyé pour un temps bref. Vis légèrement. Ta maison est ailleurs.",
    question:
      "Si le ciel est ma vraie maison, qu\u2019est-ce que cela change dans la façon dont je traverse cette journée ?",
  },
  {
    verse:
      '"Et le monde passe, et sa convoitise aussi ; mais celui qui fait la volonté de Dieu demeure éternellement."',
    reference: "1 Jean 2:17",
    meditation:
      "Tout ce après quoi le monde court — le statut, le confort, le contrôle — est déjà en train de disparaître. Mais toi, si tu marches avec Dieu, tu demeures. Non parce que tu es fort, mais parce qu\u2019il est éternel et qu\u2019il te tient.",
    question:
      "Qu\u2019est-ce que je poursuis aujourd\u2019hui qui est déjà en train de passer ?",
  },
  {
    verse:
      '"C\u2019est dans la foi qu\u2019ils sont tous morts, sans avoir obtenu les choses promises ; mais ils les ont vues et saluées de loin, reconnaissant qu\u2019ils étaient étrangers et voyageurs sur la terre."',
    reference: "Hébreux 11:13",
    meditation:
      "Ils n\u2019ont pas reçu la promesse — mais ils l\u2019ont vue de loin et l\u2019ont embrassée. Ils savaient qu\u2019ils n\u2019étaient que de passage. Toi aussi. Cette terre n\u2019est pas ta destination, c\u2019est ton voyage. Et la destination est plus belle que tout ce que tu as vu.",
    question:
      "Comment changerais-je ma journée si je me souvenais vraiment que je ne suis que de passage ?",
  },
  {
    verse:
      '"Nous aussi donc, puisque nous sommes environnés d\u2019une si grande nuée de témoins, rejetons tout fardeau, et le péché qui nous enveloppe si facilement, et courons avec persévérance dans la carrière qui nous est ouverte, ayant les regards sur Jésus."',
    reference: "Hébreux 12:1-2",
    meditation:
      "La course n\u2019est pas terminée. Les témoins avant toi l\u2019ont achevée, et maintenant ils regardent. Dépose ce qui te ralentit — non par la volonté, mais en fixant tes yeux sur Jésus. C\u2019est Lui qui donne l\u2019endurance, pas l\u2019effort.",
    question:
      "Quel est un fardeau que je porte et que Jésus ne m\u2019a jamais demandé de porter ?",
  },
  {
    verse:
      '"Car pour moi, Christ est ma vie, et la mort m\u2019est un gain."',
    reference: "Philippiens 1:21",
    meditation:
      "Si Christ est ta vie, alors rien ne peut te prendre ce qui compte le plus. Et si la mort est un gain, alors tu es libre — libre de risquer, libre d\u2019aimer, libre de lâcher prise. La peur perd son emprise quand ce qu\u2019il y a de l\u2019autre côté est meilleur.",
    question:
      "Si j\u2019avais vraiment confiance que mourir est un gain, qu\u2019est-ce qui cesserait de me faire peur ?",
  },
  {
    verse:
      '"Que votre cœur ne se trouble point. Croyez en Dieu, et croyez en moi. Il y a plusieurs demeures dans la maison de mon Père. Si cela n\u2019était pas, je vous l\u2019aurais dit. Je vais vous préparer une place."',
    reference: "Jean 14:1-2",
    meditation:
      "Il ne t\u2019a pas laissé sans espérance — il est allé devant toi préparer une place. Pas une place quelconque. Ta place. Préparée par Quelqu\u2019un qui te connaît parfaitement et t\u2019aime complètement. Ce qui t\u2019attend est personnel.",
    question:
      "Quand mon cœur se trouble aujourd\u2019hui, puis-je me souvenir qu\u2019une place est préparée pour moi ?",
  },
  {
    verse:
      '"J\u2019estime que les souffrances du temps présent ne sauraient être comparées à la gloire à venir qui sera révélée pour nous."',
    reference: "Romains 8:18",
    meditation:
      "La douleur est réelle — mais elle n\u2019est pas le dernier mot. Paul, qui a souffert plus que la plupart, a pesé ses souffrances contre la gloire à venir et les a trouvées légères. Non parce que la douleur est petite, mais parce que la gloire est immense.",
    question:
      "Quelle souffrance présente puis-je tenir plus légèrement en la pesant contre la gloire à venir ?",
  },
  {
    verse:
      '"Béni soit Dieu, le Père de notre Seigneur Jésus-Christ, qui, selon sa grande miséricorde, nous a régénérés, pour une espérance vivante, par la résurrection de Jésus-Christ d\u2019entre les morts, pour un héritage qui ne se peut ni corrompre, ni souiller, ni flétrir, lequel vous est réservé dans les cieux."',
    reference: "1 Pierre 1:3-4",
    meditation:
      "Ton héritage t\u2019attend — incorruptible, pur, qui ne se fane jamais. Rien ici-bas ne peut le toucher. Aucune perte terrestre ne le diminue, aucun échec ne l\u2019annule. Il est gardé pour toi par Celui qui ne peut mentir.",
    question:
      "Comment ma journée changerait-elle si je la vivais comme quelqu\u2019un dont l\u2019héritage est déjà garanti ?",
  },
  {
    verse:
      '"Puis je vis un nouveau ciel et une nouvelle terre ; car le premier ciel et la première terre avaient disparu."',
    reference: "Apocalypse 21:1",
    meditation:
      "Ce monde n\u2019est pas le dernier chapitre — un nouveau ciel et une nouvelle terre arrivent, où tout ce qui est brisé sera enfin restauré. Tu n\u2019arranges pas une maison en ruine ; tu attends une neuve. Et elle vient.",
    question:
      "Quelle chose brisée dans ce monde suis-je en train d\u2019espérer voir Dieu rendre entièrement nouvelle ?",
  },
  {
    verse:
      '"Nous savons, en effet, que, si cette tente où nous habitons sur la terre est détruite, nous avons dans le ciel un édifice qui est l\u2019ouvrage de Dieu, une demeure éternelle qui n\u2019a pas été faite de main d\u2019homme."',
    reference: "2 Corinthiens 5:1",
    meditation:
      "Ce corps est une tente — temporaire, fragile, fait pour le voyage. Mais un édifice t\u2019attend — éternel, fait par Dieu lui-même. Tu n\u2019es pas en train de perdre ta maison ; tu es en train de t\u2019en approcher.",
    question:
      "Qu\u2019est-ce qui me rappelle aujourd\u2019hui que ce corps est une tente, pas ma maison permanente ?",
  },
  {
    verse:
      '"Qui ai-je au ciel sinon toi ? Et sur la terre je ne prends plaisir qu\u2019en toi."',
    reference: "Psaume 73:25",
    meditation:
      "De toutes les choses au ciel et sur la terre, Dieu est ce dont ton cœur a le plus besoin. Pas ses dons, pas ses bénédictions, pas même sa guérison — Lui. Quand tu l\u2019as, tu as tout. Quand tu le perds de vue, rien d\u2019autre ne comble.",
    question:
      "Est-ce que je cherche les dons de Dieu aujourd\u2019hui, ou Dieu lui-même ?",
  },
  {
    verse:
      '"Car là où est ton trésor, là aussi sera ton cœur."',
    reference: "Matthieu 6:21",
    meditation:
      "Ton cœur suit ton trésor — pas l\u2019inverse. Si tu veux un cœur tourné vers le ciel, envoie-y tes trésors : la bonté, la prière, le pardon, l\u2019amour. Ton cœur suivra là où tu investis.",
    question:
      "Où est-ce que j\u2019investis le plus — et est-ce là que je veux que mon cœur habite ?",
  },
  {
    verse:
      '"Or la foi est une ferme assurance des choses qu\u2019on espère, une démonstration de celles qu\u2019on ne voit pas."',
    reference: "Hébreux 11:1",
    meditation:
      "La foi n\u2019est pas un vœu pieux — c\u2019est une certitude de ce qui est réel mais encore invisible. Le ciel n\u2019est pas moins réel parce que tu ne peux pas le voir. Il est aussi solide que le sol sous tes pieds — plus solide, même, parce qu\u2019il ne passera jamais.",
    question:
      "Qu\u2019est-ce que je traite comme irréel simplement parce que je ne peux pas le voir ?",
  },
  {
    verse:
      '"Il essuiera toute larme de leurs yeux, et la mort ne sera plus, et il n\u2019y aura plus ni deuil, ni cri, ni douleur, car les premières choses ont disparu."',
    reference: "Apocalypse 21:4",
    meditation:
      "Un jour, chaque larme sera essuyée — non par le temps qui atténue la douleur, mais par la main de Dieu qui la supprime entièrement. Tout deuil, tout cri, toute souffrance — terminés. Ce n\u2019est pas un conte de fées. C\u2019est une promesse de Celui qui ne peut mentir.",
    question:
      "Quelle larme est-ce que je laisse Dieu promettre d\u2019essuyer un jour ?",
  },
  {
    verse:
      '"Nous sommes donc toujours pleins de confiance, et nous savons qu\u2019en demeurant dans ce corps nous demeurons loin du Seigneur."',
    reference: "2 Corinthiens 5:6",
    meditation:
      "Tant que tu es dans ce corps, tu es loin de la maison. Ce n\u2019est pas du désespoir — c\u2019est de l\u2019honnêteté. Cette vague nostalgie que tu ressens, ce sentiment que quelque chose manque — ce n\u2019est pas un défaut en toi. C\u2019est ta boussole qui pointe vers le ciel.",
    question:
      "Quelle nostalgie en moi pourrait en fait être le mal du pays pour un endroit que je n\u2019ai pas encore vu ?",
  },
  {
    verse:
      '"Cherchez premièrement le royaume et la justice de Dieu ; et toutes ces choses vous seront données par-dessus."',
    reference: "Matthieu 6:33",
    meditation:
      "Les soucis de la vie — nourriture, vêtements, lendemain — ne disparaissent pas. Mais Jésus dit : mets le Royaume en premier, et tout le reste trouvera sa place. Ce n\u2019est pas de l\u2019irresponsabilité, c\u2019est de la confiance : le Père sait ce dont tu as besoin.",
    question:
      "Est-ce que je cherche d\u2019abord le Royaume ce matin, ou est-ce que je cours après \u201Ctoutes ces choses\u201D en premier ?",
  },
  {
    verse:
      '"Car notre légère affliction du moment présent produit pour nous, au-delà de toute mesure, un poids éternel de gloire."',
    reference: "2 Corinthiens 4:17",
    meditation:
      "Paul appelle ses souffrances \u201Clégères\u201D et \u201Cmomentanées\u201D — et il a été battu, emprisonné, naufragé. Ce n\u2019est pas qu\u2019il minimise la douleur. C\u2019est qu\u2019il voit la gloire, et à côté d\u2019elle, même les pires épreuves paraissent brèves.",
    question:
      "Quelle épreuve présente puis-je voir différemment en la comparant à l\u2019éternité ?",
  },
  {
    verse:
      '"car les choses visibles sont passagères, et les invisibles sont éternelles."',
    reference: "2 Corinthiens 4:18b",
    meditation:
      "Tout ce que tu vois disparaîtra. Tout ce que tu ne vois pas demeurera. C\u2019est le paradoxe de la foi : ce qui semble le plus solide est le plus fragile, et ce qui semble le plus fragile est le plus durable.",
    question:
      "À quelle chose invisible puis-je m\u2019accrocher aujourd\u2019hui plus fermement qu\u2019au visible ?",
  },
  {
    verse:
      '"J\u2019ai le désir de m\u2019en aller et d\u2019être avec Christ, ce qui de beaucoup est le meilleur."',
    reference: "Philippiens 1:23",
    meditation:
      "Paul n\u2019était pas morbide — il était amoureux. Être avec Christ est \u201Cde beaucoup le meilleur.\u201D Pas un peu meilleur. Pas légèrement préférable. De loin le meilleur. Si tu crois cela, la mort perd son aiguillon et la vie gagne sa liberté.",
    question:
      "Est-ce que je vis comme quelqu\u2019un pour qui le meilleur est encore à venir ?",
  },
  {
    verse:
      '"Ceux qui aspiraient à une patrie meilleure, c\u2019est-à-dire une patrie céleste. C\u2019est pourquoi Dieu n\u2019a pas honte d\u2019être appelé leur Dieu, car il leur a préparé une cité."',
    reference: "Hébreux 11:16",
    meditation:
      "Ils désiraient quelque chose de mieux — et Dieu n\u2019a pas eu honte de leur désir. Il leur a préparé une cité. Ton aspiration au ciel n\u2019est pas de la faiblesse. C\u2019est exactement ce que Dieu honore.",
    question:
      "Est-ce que je permets à mon désir du ciel de vivre en moi, ou est-ce que je le fais taire ?",
  },
  {
    verse:
      '"Le monde passe, et sa convoitise aussi ; mais celui qui fait la volonté de Dieu demeure éternellement."',
    reference: "1 Jean 2:17",
    meditation:
      "Le monde et ses désirs sont en train de s\u2019effacer — lentement, sûrement. Mais toi, accroché à la volonté de Dieu, tu demeures. Non par ta propre force, mais parce que Sa volonté ne passe jamais.",
    question:
      "Qu\u2019est-ce qui, dans ma vie, est en train de passer sans que je m\u2019en rende compte ?",
  },
  {
    verse:
      '"Si donc vous êtes ressuscités avec Christ, cherchez les choses d\u2019en haut, où Christ est assis à la droite de Dieu."',
    reference: "Colossiens 3:1",
    meditation:
      "Tu es ressuscité avec Christ — c\u2019est déjà fait. Ta vie est cachée là-haut avec Lui. La recherche des choses d\u2019en haut n\u2019est pas un devoir pénible ; c\u2019est un retour naturel vers ce qui est déjà à toi.",
    question:
      "Puisque je suis déjà ressuscité avec Christ, qu\u2019est-ce que cela change dans mes priorités aujourd\u2019hui ?",
  },
  {
    verse:
      '"Car vous êtes morts, et votre vie est cachée avec Christ en Dieu."',
    reference: "Colossiens 3:3",
    meditation:
      "Ta vraie vie n\u2019est pas visible ici. Elle est cachée — en sécurité, avec Christ, en Dieu. Ce que les gens voient de toi n\u2019est pas tout ce que tu es. Le plus vrai de toi est gardé là où personne ne peut l\u2019atteindre.",
    question:
      "Est-ce que je me définis par ce que les gens voient, ou par ce que Dieu garde ?",
  },
  {
    verse:
      '"Quand Christ, votre vie, paraîtra, alors vous paraîtrez aussi avec lui dans la gloire."',
    reference: "Colossiens 3:4",
    meditation:
      "Un jour, Christ paraîtra — et avec lui, tout ce que tu es vraiment sera révélé. La gloire qui est cachée en toi maintenant sera visible pour tous. Ce jour-là, tout ce que tu as enduré dans l\u2019obscurité brillera.",
    question:
      "Qu\u2019est-ce qui serait différent dans ma journée si je savais que ma gloire est simplement cachée, pas absente ?",
  },
  {
    verse:
      '"Car nous marchons par la foi et non par la vue."',
    reference: "2 Corinthiens 5:7",
    meditation:
      "La foi, ce n\u2019est pas avancer à l\u2019aveugle — c\u2019est avancer en voyant ce qui est invisible. Tu ne vois pas le chemin complet, mais tu connais Celui qui marche devant toi. C\u2019est assez.",
    question:
      "Où est-ce que j\u2019exige de voir avant de marcher, alors que Dieu me demande de lui faire confiance ?",
  },
  {
    verse:
      '"car nous n\u2019avons pas ici-bas de cité permanente, mais nous cherchons celle qui est à venir."',
    reference: "Hébreux 13:14",
    meditation:
      "Rien ici n\u2019est permanent — ni la maison, ni la ville, ni le travail, ni le corps. C\u2019est libérant, pas triste. Tu n\u2019as pas à t\u2019accrocher à ce qui passe. Tu peux le tenir légèrement, parce que quelque chose de permanent t\u2019attend.",
    question:
      "À quelle chose temporaire est-ce que je m\u2019accroche comme si elle était permanente ?",
  },
  {
    verse:
      '"Or, la vie éternelle, c\u2019est qu\u2019ils te connaissent, toi, le seul vrai Dieu, et celui que tu as envoyé, Jésus-Christ."',
    reference: "Jean 17:3",
    meditation:
      "La vie éternelle n\u2019est pas seulement une durée — c\u2019est une relation. Connaître Dieu, connaître Christ. Pas savoir des choses sur eux, mais les connaître personnellement. La vie éternelle commence maintenant, à chaque moment où tu te tournes vers Lui.",
    question:
      "Est-ce que je connais des choses sur Dieu, ou est-ce que je suis en train de le connaître, Lui ?",
  },
  {
    verse:
      '"Que le Dieu de l\u2019espérance vous remplisse de toute joie et de toute paix dans la foi, pour que vous abondiez en espérance, par la puissance du Saint-Esprit."',
    reference: "Romains 15:13",
    meditation:
      "L\u2019espérance n\u2019est pas quelque chose que tu fabriques — elle est versée en toi par le Dieu de l\u2019espérance. La joie et la paix viennent de la foi, et l\u2019espérance déborde par la puissance de l\u2019Esprit. Tu n\u2019as pas à la produire. Tu as à la recevoir.",
    question:
      "Est-ce que j\u2019essaie de fabriquer de l\u2019espérance par moi-même, ou est-ce que je la reçois de Dieu ?",
  },
  {
    verse:
      '"Heureux les morts qui meurent dans le Seigneur, dès maintenant ! Oui, dit l\u2019Esprit, afin qu\u2019ils se reposent de leurs travaux, car leurs œuvres les suivent."',
    reference: "Apocalypse 14:13",
    meditation:
      "Leurs œuvres les suivent — pas les devancent, pas les précèdent. Tout ce que tu fais pour Christ dans cette vie te suit dans l\u2019éternité. Le repos vient, et rien de ce que tu as fait par amour ne sera perdu.",
    question:
      "Quelle œuvre d\u2019amour est-ce que je peux accomplir aujourd\u2019hui et qui me suivra dans l\u2019éternité ?",
  },
  {
    verse:
      '"Mais, comme il est écrit, ce sont des choses que l\u2019œil n\u2019a point vues, que l\u2019oreille n\u2019a point entendues, et qui ne sont point montées au cœur de l\u2019homme, des choses que Dieu a préparées pour ceux qui l\u2019aiment."',
    reference: "1 Corinthiens 2:9",
    meditation:
      "Tu ne peux pas imaginer ce qui t\u2019attend. Pas parce que c\u2019est vague, mais parce que c\u2019est au-delà de tout ce que ton cœur peut concevoir. Le plus beau moment de ta vie n\u2019est qu\u2019une ombre de ce qui vient.",
    question:
      "Quand est-ce que la beauté m\u2019a pris par surprise — et si ce n\u2019était qu\u2019un avant-goût ?",
  },
  {
    verse:
      '"En vérité, en vérité, je vous le dis, celui qui écoute ma parole, et qui croit à celui qui m\u2019a envoyé, a la vie éternelle et ne vient point en jugement, mais il est passé de la mort à la vie."',
    reference: "Jean 5:24",
    meditation:
      "C\u2019est déjà fait. Tu es passé de la mort à la vie — pas tu passeras, pas tu pourrais passer. C\u2019est accompli. La vie éternelle n\u2019est pas un espoir lointain ; c\u2019est ta réalité présente en Christ.",
    question:
      "Est-ce que je vis comme quelqu\u2019un qui est déjà passé de la mort à la vie ?",
  },
  {
    verse:
      '"Ne craignez pas ceux qui tuent le corps et qui ne peuvent tuer l\u2019âme ; craignez plutôt celui qui peut faire périr l\u2019âme et le corps dans la géhenne."',
    reference: "Matthieu 10:28",
    meditation:
      "La pire chose qu\u2019un homme puisse te faire ne touche que le temporaire. Ton âme est hors de portée de tout ce qui est terrestre. Cette perspective ne rend pas insouciant — elle rend libre. Libre de la peur qui enchaîne.",
    question:
      "Quelle peur terrestre me retient de vivre avec audace pour Christ ?",
  },
  {
    verse:
      '"Abraham attendait la cité qui a de solides fondements, celle dont Dieu est l\u2019architecte et le constructeur."',
    reference: "Hébreux 11:10",
    meditation:
      "Abraham a vécu sous des tentes toute sa vie — non par pauvreté, mais par vision. Il voyait une cité que Dieu lui-même construisait. Toi aussi, tu peux vivre légèrement ici, parce que tes fondations solides ne sont pas encore visibles — mais elles sont réelles.",
    question:
      "Qu\u2019est-ce que j\u2019essaie de construire de permanent ici alors que mes vraies fondations sont au ciel ?",
  },
  {
    verse:
      '"Nous préférons quitter ce corps et demeurer auprès du Seigneur."',
    reference: "2 Corinthiens 5:8",
    meditation:
      "Paul ne craignait pas la mort — il la préférait, parce qu\u2019elle signifiait être avec le Seigneur. Ce n\u2019est pas du fatalisme. C\u2019est de l\u2019amour — un amour si profond pour Christ que sa présence est la chose la plus désirable qui soit.",
    question:
      "La présence de Christ est-elle ce que je désire le plus, ou est-ce que je désire surtout ses bénédictions ?",
  },
  {
    verse:
      '"Ne vous inquiétez de rien ; mais en toute chose faites connaître vos besoins à Dieu par des prières et des supplications, avec des actions de grâces."',
    reference: "Philippiens 4:6",
    meditation:
      "L\u2019inquiétude te tire vers le bas, vers les choses de la terre. La prière te tire vers le haut, vers les choses de Dieu. Chaque fois que tu échanges une inquiétude contre une prière, tu lèves tes yeux.",
    question:
      "Quelle inquiétude puis-je transformer en prière ce matin ?",
  },
  {
    verse:
      '"Car notre bourgeoisie est aux cieux, d\u2019où aussi nous attendons le Seigneur Jésus-Christ comme Sauveur."',
    reference: "Philippiens 3:20",
    meditation:
      "Ta citoyenneté est au ciel. Ce n\u2019est pas un visa touristique — c\u2019est ta nationalité. Tu vis ici en ambassadeur, pas en résident. Et ton Roi va bientôt revenir te chercher.",
    question:
      "Comment un ambassadeur du ciel se comporterait-il dans ma situation d\u2019aujourd\u2019hui ?",
  },
  {
    verse:
      '"Et voici, je viens bientôt. Heureux celui qui garde les paroles de la prophétie de ce livre !"',
    reference: "Apocalypse 22:7",
    meditation:
      "Il vient bientôt. Ce ne sont pas des paroles creuses — c\u2019est la promesse finale du livre. Chaque jour qui passe te rapproche de ce moment. Tu n\u2019attends pas un événement — tu attends une Personne.",
    question:
      "Est-ce que j\u2019attends un événement, ou est-ce que j\u2019attends Jésus ?",
  },
  {
    verse:
      '"Je suis la résurrection et la vie. Celui qui croit en moi vivra, quand même il serait mort."',
    reference: "Jean 11:25",
    meditation:
      "Jésus ne dit pas qu\u2019il connaît le chemin vers la résurrection — il dit qu\u2019il est la résurrection. Ce n\u2019est pas une doctrine à croire mais une Personne à connaître. Et cette Personne dit : même la mort ne te gardera pas.",
    question:
      "Est-ce que ma confiance est dans une idée sur la résurrection, ou dans Celui qui est la résurrection ?",
  },
  {
    verse:
      '"Depuis les jours éternels, personne n\u2019a entendu, aucune oreille n\u2019a perçu, et aucun œil n\u2019a vu un autre dieu que toi, qui agisse en faveur de celui qui se confie en lui."',
    reference: "Ésaïe 64:3",
    meditation:
      "Aucun autre dieu n\u2019agit pour ceux qui attendent. Le nôtre, si. Il travaille en ta faveur pendant que tu te confies en lui. Tu n\u2019as pas à tout arranger — tu as à te confier en Celui qui arrange tout.",
    question:
      "Où est-ce que j\u2019essaie de tout arranger moi-même au lieu de me confier en Celui qui agit pour moi ?",
  },
  {
    verse:
      '"Je leur donne la vie éternelle ; et elles ne périront jamais, et personne ne les ravira de ma main."',
    reference: "Jean 10:28",
    meditation:
      "Personne. Rien. Pas une force, pas un péché, pas un échec ne peut t\u2019arracher de sa main. La vie éternelle qu\u2019il donne n\u2019est pas fragile — elle est gardée par la poigne la plus forte de l\u2019univers.",
    question:
      "Est-ce que je vis dans la peur d\u2019être perdu, ou dans la certitude d\u2019être tenu ?",
  },
  {
    verse:
      '"Car Dieu a tant aimé le monde qu\u2019il a donné son Fils unique, afin que quiconque croit en lui ne périsse point, mais qu\u2019il ait la vie éternelle."',
    reference: "Jean 3:16",
    meditation:
      "La vie éternelle n\u2019est pas une récompense pour les méritants — c\u2019est un don pour ceux qui croient. Dieu a tant aimé qu\u2019il a donné. L\u2019amour est venu en premier, le don a suivi. Tu n\u2019as rien à prouver.",
    question:
      "Est-ce que je reçois la vie éternelle comme un don, ou est-ce que j\u2019essaie encore de la mériter ?",
  },
  {
    verse:
      '"Mais le fruit de l\u2019Esprit, c\u2019est l\u2019amour, la joie, la paix, la patience, la bonté, la bénignité, la fidélité, la douceur, la tempérance."',
    reference: "Galates 5:22-23",
    meditation:
      "Le fruit de l\u2019Esprit n\u2019est pas quelque chose que tu produis — c\u2019est quelque chose qui pousse en toi quand tu restes attaché au cep. L\u2019amour, la joie, la paix — ce sont des signes d\u2019une vie connectée au ciel, pas des devoirs à accomplir.",
    question:
      "Quel fruit de l\u2019Esprit est en train de pousser en moi en ce moment — et lequel a besoin de plus de place ?",
  },
  {
    verse:
      '"Mes brebis entendent ma voix ; je les connais, et elles me suivent."',
    reference: "Jean 10:27",
    meditation:
      "Il te connaît — pas juste de loin, mais intimement. Et tu entends sa voix — peut-être pas toujours distinctement, mais elle est là, douce et persistante, t\u2019appelant vers la maison. Tu n\u2019es pas perdu. Tu es connu et appelé.",
    question:
      "Est-ce que j\u2019écoute sa voix aujourd\u2019hui, ou est-ce que le bruit du monde la couvre ?",
  },
  {
    verse:
      '"Les cieux racontent la gloire de Dieu, et l\u2019étendue manifeste l\u2019œuvre de ses mains."',
    reference: "Psaume 19:2",
    meditation:
      "Le ciel au-dessus de toi parle — pas avec des mots, mais avec de la gloire. Chaque lever de soleil, chaque étoile est un murmure de ce qui t\u2019attend. La création pointe vers son Créateur, et ton Créateur t\u2019attend chez lui.",
    question:
      "Quand ai-je regardé le ciel pour la dernière fois et me suis-je souvenu que mon Créateur m\u2019y attend ?",
  },
  {
    verse:
      '"Car l\u2019Éternel lui-même descendra du ciel, avec un cri de commandement, avec la voix d\u2019un archange, et avec la trompette de Dieu. Et les morts en Christ ressusciteront premièrement."',
    reference: "1 Thessaloniciens 4:16",
    meditation:
      "Il ne va pas envoyer un messager — il descendra lui-même. Avec un cri, avec une trompette, avec autorité. Et ceux qui dorment en Christ se lèveront. La mort n\u2019a pas le dernier mot. Lui, oui.",
    question:
      "Quand je pense à ceux que j\u2019ai perdus en Christ, puis-je me souvenir qu\u2019ils se lèveront ?",
  },
  {
    verse:
      '"Puis nous, les vivants, qui serons restés, nous serons tous ensemble enlevés avec eux sur des nuées, à la rencontre du Seigneur dans les airs, et ainsi nous serons toujours avec le Seigneur."',
    reference: "1 Thessaloniciens 4:17",
    meditation:
      "Toujours avec le Seigneur — c\u2019est la fin de l\u2019histoire. Pas une visite, pas un aperçu, mais pour toujours. La séparation que tu ressens maintenant n\u2019est pas le dernier mot. La réunion, oui.",
    question:
      "Quand la séparation me pèse, puis-je tenir cette promesse : toujours avec le Seigneur ?",
  },
  {
    verse:
      '"Consolez-vous donc les uns les autres par ces paroles."',
    reference: "1 Thessaloniciens 4:18",
    meditation:
      "Paul ne dit pas \u201Cessayez de ne pas y penser.\u201D Il dit : consolez-vous avec ces vérités. La consolation n\u2019est pas de nier la douleur — c\u2019est de la tenir à la lumière de ce qui vient.",
    question:
      "Qui puis-je consoler aujourd\u2019hui avec la vérité de ce qui nous attend ?",
  },
  {
    verse:
      '"Ne vous amassez pas des trésors sur la terre, où la teigne et la rouille détruisent, et où les voleurs percent et dérobent."',
    reference: "Matthieu 6:19",
    meditation:
      "Jésus ne dit pas que posséder des choses est mal — il dit qu\u2019y attacher ton cœur est dangereux. Tout ce que tu accumules ici est vulnérable. Investis là où c\u2019est éternel.",
    question:
      "Qu\u2019est-ce que je protège anxieusement et qui est de toute façon vulnérable ?",
  },
  {
    verse:
      '"Attachez-vous aux choses d\u2019en haut, et non à celles qui sont sur la terre."',
    reference: "Colossiens 3:2",
    meditation:
      "Ce commandement revient parce qu\u2019il est facile de glisser. Chaque matin, le monde te tire vers le bas — par l\u2019écran, par les nouvelles, par la liste de choses à faire. Lever les yeux est un choix quotidien, pas un exploit unique.",
    question:
      "Qu\u2019est-ce qui a tiré mes yeux vers le bas hier, et comment puis-je les lever aujourd\u2019hui ?",
  },
  {
    verse:
      '"Je t\u2019ai aimé d\u2019un amour éternel ; c\u2019est pourquoi je t\u2019ai conservé ma bonté."',
    reference: "Jérémie 31:3",
    meditation:
      "Son amour pour toi n\u2019a pas commencé hier et ne finira pas demain. Il est éternel — sans début, sans fin. Tu n\u2019as pas à le gagner, et tu ne peux pas le perdre. Tu vis dans un amour qui dure pour toujours.",
    question:
      "Est-ce que je vis comme quelqu\u2019un qui est aimé d\u2019un amour éternel ?",
  },
  {
    verse:
      '"L\u2019Éternel est ma part, dit mon âme ; c\u2019est pourquoi j\u2019espérerai en lui."',
    reference: "Lamentations 3:24",
    meditation:
      "Quand tout le reste est perdu — quand Jérusalem est en ruines, quand les plans s\u2019effondrent — l\u2019âme dit : l\u2019Éternel est ma part. Ce n\u2019est pas un optimisme naïf. C\u2019est une foi qui a regardé la destruction en face et qui a trouvé Dieu suffisant.",
    question:
      "Si tout ce que j\u2019ai me manquait, Dieu serait-il encore suffisant pour moi ?",
  },
  {
    verse:
      '"Je considère toutes choses comme une perte, à cause de l\u2019excellence de la connaissance de Jésus-Christ mon Seigneur, pour lequel j\u2019ai renoncé à tout."',
    reference: "Philippiens 3:8",
    meditation:
      "Paul avait tout — éducation, statut, réputation — et il a tout compté comme une perte à côté de connaître Christ. Ce n\u2019est pas du fanatisme. C\u2019est quelqu\u2019un qui a trouvé quelque chose de tellement meilleur que tout le reste pâlit.",
    question:
      "Qu\u2019est-ce que je trouve si difficile à lâcher, et comment cela se compare-t-il à connaître Christ ?",
  },
  {
    verse:
      '"Car le salaire du péché, c\u2019est la mort ; mais le don gratuit de Dieu, c\u2019est la vie éternelle en Jésus-Christ notre Seigneur."',
    reference: "Romains 6:23",
    meditation:
      "Un salaire se gagne. Un don se reçoit. La mort est ce que le péché rapporte ; la vie éternelle est ce que Dieu donne gratuitement. Tu n\u2019as pas à travailler pour elle — tu as à l\u2019accepter.",
    question:
      "Est-ce que je travaille encore pour ce qui m\u2019est déjà donné gratuitement ?",
  },
  {
    verse:
      '"Et le témoignage, le voici : Dieu nous a donné la vie éternelle, et cette vie est dans son Fils."',
    reference: "1 Jean 5:11",
    meditation:
      "La vie éternelle n\u2019est pas une récompense future — elle est dans le Fils, et si tu as le Fils, tu l\u2019as maintenant. Ce n\u2019est pas une théorie. C\u2019est un témoignage : Dieu a parlé, et ce qu\u2019il a dit est irrévocable.",
    question:
      "Est-ce que je vis la vie éternelle comme une réalité présente, ou comme un espoir lointain ?",
  },
  {
    verse:
      '"Car je suis persuadé que ni la mort ni la vie, ni les anges ni les dominations, ni les choses présentes ni les choses à venir, ni les puissances, ni la hauteur, ni la profondeur, ni aucune autre créature ne pourra nous séparer de l\u2019amour de Dieu manifesté en Jésus-Christ notre Seigneur."',
    reference: "Romains 8:38-39",
    meditation:
      "Rien — absolument rien — ne peut te séparer de son amour. Ni ta pire journée, ni ton pire péché, ni la mort elle-même. Cet amour est la chose la plus sûre de l\u2019univers, et tu es dedans.",
    question:
      "Qu\u2019est-ce que je crains secrètement pourrait me séparer de l\u2019amour de Dieu ?",
  },
  {
    verse:
      '"Venez à moi, vous tous qui êtes fatigués et chargés, et je vous donnerai du repos."',
    reference: "Matthieu 11:28",
    meditation:
      "Tu es fatigué — il le sait. Tu portes des fardeaux — il le voit. Son invitation n\u2019est pas \u201Cessaie plus fort\u201D mais \u201Cviens.\u201D Le repos n\u2019est pas à la fin du travail. Il est en Christ, et Christ est accessible maintenant.",
    question:
      "Quel fardeau est-ce que je porte que Jésus m\u2019invite à déposer en ce moment ?",
  },
  {
    verse:
      '"et les choses anciennes sont passées ; voici, toutes choses sont devenues nouvelles."',
    reference: "2 Corinthiens 5:17b",
    meditation:
      "Les choses anciennes — les regrets, les chaînes, les identités brisées — sont passées. Pas masquées, pas réparées — passées. Et à leur place, du nouveau. Ce que Dieu fait en toi n\u2019est pas une rénovation. C\u2019est une création.",
    question:
      "Quelle chose ancienne est-ce que je traîne encore alors que Dieu dit qu\u2019elle est passée ?",
  },
  {
    verse:
      '"Voici, je fais toutes choses nouvelles."',
    reference: "Apocalypse 21:5",
    meditation:
      "Pas certaines choses — toutes choses. Dieu ne répare pas le vieux monde. Il en fait un nouveau. Ta douleur, ta perte, ta lassitude — un jour, elles seront entièrement avalées par la nouveauté. Ce jour-là, rien d\u2019ancien ne restera.",
    question:
      "Quelle chose dans ma vie ai-je renoncé à voir rendue nouvelle ?",
  },
  {
    verse:
      '"J\u2019ai combattu le bon combat, j\u2019ai achevé la course, j\u2019ai gardé la foi."',
    reference: "2 Timothée 4:7",
    meditation:
      "Paul ne dit pas qu\u2019il a gagné — il dit qu\u2019il a fini et qu\u2019il a gardé la foi. La fidélité, pas le succès, est la mesure. Tu n\u2019as pas à être brillant. Tu as à être fidèle, jusqu\u2019au bout.",
    question:
      "Qu\u2019est-ce que \u201Cgarder la foi\u201D signifie pour moi dans les petites choses d\u2019aujourd\u2019hui ?",
  },
  {
    verse:
      '"Désormais la couronne de justice m\u2019est réservée ; le Seigneur, le juste juge, me la donnera dans ce jour-là, et non seulement à moi, mais encore à tous ceux qui auront aimé son avènement."',
    reference: "2 Timothée 4:8",
    meditation:
      "Une couronne t\u2019attend — pas pour tes performances, mais pour avoir aimé son retour. L\u2019amour de sa venue est déjà un acte de foi. Si tu lèves tes yeux vers son apparition, la récompense est réservée.",
    question:
      "Est-ce que j\u2019aime son retour — est-ce que je l\u2019attends avec espérance ?",
  },
  {
    verse:
      '"Dieu est notre refuge et notre force, un secours qui ne manque jamais dans la détresse."',
    reference: "Psaume 46:2",
    meditation:
      "Un secours qui ne manque jamais — pas parfois, pas quand tu le mérites, mais jamais. Dans la détresse la plus noire, il est là. Tu n\u2019as pas à crier assez fort pour qu\u2019il t\u2019entende. Il est déjà présent.",
    question:
      "Quand la détresse vient, est-ce que je cours vers lui ou est-ce que j\u2019essaie de m\u2019en sortir seul ?",
  },
  {
    verse:
      '"Et la paix de Dieu, qui surpasse toute intelligence, gardera vos cœurs et vos pensées en Jésus-Christ."',
    reference: "Philippiens 4:7",
    meditation:
      "Cette paix ne dépend pas de ta compréhension — elle la dépasse. Tu n\u2019as pas besoin de tout comprendre pour être en paix. Tu as besoin de Celui qui comprend tout. Et il garde ton cœur.",
    question:
      "Où est-ce que j\u2019exige de comprendre avant d\u2019accepter la paix que Dieu offre ?",
  },
  {
    verse:
      '"Que notre Seigneur Jésus-Christ lui-même, et Dieu notre Père, qui nous a aimés, et qui nous a donné par sa grâce une consolation éternelle et une bonne espérance, consolent vos cœurs."',
    reference: "2 Thessaloniciens 2:16-17",
    meditation:
      "La consolation de Dieu est éternelle — pas un réconfort passager, pas un pansement. Quand les consolations de ce monde s\u2019épuisent, les siennes non. Il console et affermit ce qui est las en toi.",
    question:
      "Où ai-je besoin que la consolation éternelle de Dieu atteigne aujourd\u2019hui ?",
  },
  {
    verse:
      '"car nous n\u2019avons rien apporté dans le monde, et il est évident que nous n\u2019en pouvons rien emporter."',
    reference: "1 Timothée 6:7",
    meditation:
      "Tu es arrivé les mains vides et tu repartiras de même. Tout ce que tu accumules ici reste ici. Ce n\u2019est pas un désespoir — c\u2019est une libération du travail épuisant de s\u2019accrocher. Ce qui compte n\u2019est pas ce que tu amasses, mais Qui tu connais.",
    question:
      "Qu\u2019est-ce que je travaille à retenir et que je ne peux de toute façon pas emporter ?",
  },
  {
    verse:
      '"maintenez-vous dans l\u2019amour de Dieu, en attendant la miséricorde de notre Seigneur Jésus-Christ pour la vie éternelle."',
    reference: "Jude 21",
    meditation:
      "La vie chrétienne est une attente — non oisive, mais pleine d\u2019espoir — gardée dans l\u2019amour de Dieu, attentive à la miséricorde de Christ qui mène à la vie éternelle. Tu n\u2019es pas à la dérive. Tu es gardé, pendant que tu attends Celui qui vient.",
    question:
      "Comment puis-je me maintenir dans l\u2019amour de Dieu pendant que j\u2019attends aujourd\u2019hui ?",
  },
  {
    verse:
      '"Car je vais créer de nouveaux cieux et une nouvelle terre ; on ne se rappellera plus les choses passées, elles ne reviendront plus à l\u2019esprit."',
    reference: "Ésaïe 65:17",
    meditation:
      "Dieu fait tout nouveau — si nouveau que les anciens chagrins ne reviendront même plus à l\u2019esprit. Non refoulés, non endurés — simplement disparus, engloutis par quelque chose de meilleur. La douleur que tu n\u2019imagines pas oublier, il peut te la faire oublier dans la joie.",
    question:
      "Quelle chose passée est-ce que j\u2019aspire à voir Dieu rendre si nouvelle qu\u2019elle ne me hante plus ?",
  },
  {
    verse:
      '"Ma chair et mon cœur peuvent se consumer : Dieu sera toujours le rocher de mon cœur et mon partage."',
    reference: "Psaume 73:26",
    meditation:
      "Ton corps faiblira. Ton cœur, à la fin, cédera. Mais ce n\u2019est pas ta fin — Dieu est le rocher de ton cœur et ton partage pour toujours. Quand tout ce dont tu es fait s\u2019épuise, il demeure, et il est à toi.",
    question:
      "Quand mes propres forces faiblissent, puis-je reposer en Dieu comme mon partage pour toujours ?",
  },
  {
    verse:
      '"Celui qui vaincra héritera ces choses ; je serai son Dieu, et il sera mon fils."',
    reference: "Apocalypse 21:7",
    meditation:
      "L\u2019héritage n\u2019est pas un lot de consolation — c\u2019est une relation. Dieu sera ton Dieu, et tu seras son enfant. Vaincre ne signifie pas être parfait ; cela signifie tenir bon dans la foi jusqu\u2019au bout. Et la récompense, c\u2019est Lui.",
    question:
      "Qu\u2019est-ce que \u201Cvaincre\u201D signifie pour moi dans ce que je traverse aujourd\u2019hui ?",
  },
  {
    verse:
      '"Car Dieu n\u2019est pas injuste pour oublier votre travail et l\u2019amour que vous avez montré pour son nom."',
    reference: "Hébreux 6:10",
    meditation:
      "Dieu n\u2019oublie rien. L\u2019acte de bonté que personne n\u2019a remarqué, la prière que personne n\u2019a entendue, le sacrifice que personne n\u2019a vu — il se souvient de tout. Ton travail n\u2019est pas en vain.",
    question:
      "Quel acte fidèle ai-je l\u2019impression que personne ne voit — et puis-je me rappeler que Dieu le voit ?",
  },
  {
    verse:
      '"Nous sommes pressés de toute manière, mais non réduits à l\u2019extrémité ; dans la détresse, mais non dans le désespoir."',
    reference: "2 Corinthiens 4:8",
    meditation:
      "Pressé mais pas écrasé. Troublé mais pas désespéré. Il y a une différence entre la difficulté et la fin. Tant que Christ vit, tu n\u2019es jamais au bout — même quand tu te sens au bout.",
    question:
      "Où est-ce que je confonds \u201Cpressé\u201D avec \u201Cfini\u201D ?",
  },
  {
    verse:
      '"Or, sans la foi il est impossible de lui être agréable ; car il faut que celui qui s\u2019approche de Dieu croie que Dieu existe, et qu\u2019il est le rémunérateur de ceux qui le cherchent."',
    reference: "Hébreux 11:6",
    meditation:
      "Dieu récompense ceux qui le cherchent — pas ceux qui ont tout compris, mais ceux qui le cherchent. Le chemin vers lui ne demande pas la perfection, juste la foi que Lui est réel et qu\u2019il vaut la peine d\u2019être cherché.",
    question:
      "Est-ce que je cherche Dieu aujourd\u2019hui, ou est-ce que j\u2019attends d\u2019avoir tout compris pour m\u2019approcher ?",
  },
  {
    verse:
      '"Et quiconque aura quitté, à cause de mon nom, ses frères, ou ses sœurs, ou son père, ou sa mère, recevra le centuple, et héritera la vie éternelle."',
    reference: "Matthieu 19:29",
    meditation:
      "Jésus ne demande pas le sacrifice sans récompense — il promet le centuple et la vie éternelle. Ce que tu donnes pour lui n\u2019est pas perdu. C\u2019est semé dans un sol qui produit une récolte éternelle.",
    question:
      "Qu\u2019est-ce que j\u2019hésite à donner pour Christ, oubliant qu\u2019il rend toujours plus qu\u2019il ne prend ?",
  },
  {
    verse:
      '"L\u2019Éternel est mon berger : je ne manquerai de rien."',
    reference: "Psaume 23:1",
    meditation:
      "Si l\u2019Éternel est ton berger, alors tu as déjà tout ce qu\u2019il te faut. Pas tout ce que tu veux — tout ce qu\u2019il te faut. Le berger connaît ses brebis, connaît le chemin, et ne les abandonne jamais.",
    question:
      "De quoi ai-je peur de manquer aujourd\u2019hui — et mon Berger le sait-il ?",
  },
  {
    verse:
      '"Mais ceux qui se confient en l\u2019Éternel renouvellent leur force. Ils prennent le vol comme les aigles ; ils courent, et ne se lassent point ; ils marchent, et ne se fatiguent point."',
    reference: "Ésaïe 40:31",
    meditation:
      "La force renouvelée ne vient pas de l\u2019effort — elle vient de la confiance. Attendre l\u2019Éternel n\u2019est pas de la passivité ; c\u2019est un ancrage. Et ceux qui s\u2019ancrent en lui trouvent une force qui ne s\u2019épuise pas.",
    question:
      "Est-ce que j\u2019essaie de voler avec mes propres forces, ou est-ce que j\u2019attends que Dieu renouvelle les miennes ?",
  },
  {
    verse:
      '"Il a mis dans mon cœur la pensée de l\u2019éternité."',
    reference: "Ecclésiaste 3:11b",
    meditation:
      "Ce désir que tu sens — celui qui dit que ce monde n\u2019est pas tout — Dieu l\u2019a mis en toi. Ce n\u2019est pas un défaut. C\u2019est un cadeau. La pensée de l\u2019éternité dans ton cœur est la preuve que tu es fait pour plus que ceci.",
    question:
      "Quand est-ce que je sens cette aspiration à l\u2019éternité, et qu\u2019est-ce qu\u2019elle me dit ?",
  },
  {
    verse:
      '"Et moi, je suis avec vous tous les jours, jusqu\u2019à la fin du monde."',
    reference: "Matthieu 28:20",
    meditation:
      "Tous les jours — pas seulement les bons. Pas seulement les jours de foi. Tous. Il est avec toi dans la fatigue, dans le doute, dans l\u2019ordinaire. Tu n\u2019es jamais seul, même quand tu te sens seul.",
    question:
      "Est-ce que je crois vraiment qu\u2019il est avec moi aujourd\u2019hui — même dans l\u2019ordinaire ?",
  },
  {
    verse:
      '"Voici, je me tiens à la porte, et je frappe. Si quelqu\u2019un entend ma voix et ouvre la porte, j\u2019entrerai chez lui, je souperai avec lui, et lui avec moi."',
    reference: "Apocalypse 3:20",
    meditation:
      "Il ne force pas la porte — il frappe. Il ne crie pas — il attend. La douceur de Christ est étonnante : le Roi de l\u2019univers se tient à ta porte et demande d\u2019entrer. Ouvre-lui.",
    question:
      "Est-ce que j\u2019entends sa voix aujourd\u2019hui, et est-ce que je lui ouvre la porte ?",
  },
  {
    verse:
      '"J\u2019ai mis l\u2019Éternel constamment devant moi ; comme il est à ma droite, je ne chancellerai pas."',
    reference: "Psaume 16:8",
    meditation:
      "Quand l\u2019Éternel est devant toi, rien ne peut te renverser. Ce n\u2019est pas parce que les difficultés disparaissent, mais parce que ta perspective change. Il est à ta droite — solide, présent, inébranlable.",
    question:
      "Qu\u2019est-ce que je mets devant moi en premier le matin — l\u2019Éternel, ou mes soucis ?",
  },
  {
    verse:
      '"Jésus lui dit : Je suis le chemin, la vérité, et la vie. Nul ne vient au Père que par moi."',
    reference: "Jean 14:6",
    meditation:
      "Il n\u2019a pas dit qu\u2019il connaît le chemin — il est le chemin. La route vers le Père, vers la maison, vers l\u2019éternité passe par une Personne, pas par un programme. Et cette Personne te connaît par ton nom.",
    question:
      "Est-ce que je suis un chemin, ou est-ce que je suis une Personne ?",
  },
  {
    verse:
      '"En lui nous avons la rédemption par son sang, la rémission des péchés, selon la richesse de sa grâce."',
    reference: "Éphésiens 1:7",
    meditation:
      "La rédemption est accomplie — pas à moitié, pas en attente, mais complète en Christ. Tes péchés ne sont pas simplement pardonnés ; ils sont couverts par la richesse de sa grâce. Tu es libre, maintenant, pas un jour.",
    question:
      "Y a-t-il un péché que je refuse encore de croire pardonné ?",
  },
  {
    verse:
      '"Tu me feras connaître le sentier de la vie ; il y a d\u2019abondantes joies devant ta face, des délices éternelles à ta droite."',
    reference: "Psaume 16:11",
    meditation:
      "La joie éternelle n\u2019est pas une joie atténuée — c\u2019est la plénitude. Devant sa face, il y a une joie que rien ici-bas ne peut reproduire ni épuiser. Et elle est éternelle — sans fin, sans déclin.",
    question:
      "Quand ai-je goûté une joie qui pointait vers quelque chose de plus grand ?",
  },
  {
    verse:
      '"Approchez-vous de Dieu, et il s\u2019approchera de vous."',
    reference: "Jacques 4:8",
    meditation:
      "La distance que tu sens n\u2019est pas parce qu\u2019il s\u2019est éloigné. Fais un pas vers lui — même petit, même hésitant — et il vient à ta rencontre. Il ne recule jamais devant celui qui s\u2019approche.",
    question:
      "Quel petit pas vers Dieu puis-je faire en ce moment ?",
  },
  {
    verse:
      '"Mais le Seigneur est fidèle, il vous affermira et vous préservera du malin."',
    reference: "2 Thessaloniciens 3:3",
    meditation:
      "Ta fidélité vacille — la sienne, jamais. Quand tu te sens faible, rappelle-toi que c\u2019est sa fidélité, pas la tienne, qui te garde. Il t\u2019affermit et te préserve — c\u2019est son travail, pas le tien.",
    question:
      "Où est-ce que je porte la responsabilité de ma propre préservation au lieu de la confier à sa fidélité ?",
  },
  {
    verse:
      '"Mais quand ce qui est parfait sera venu, ce qui est partiel disparaîtra."',
    reference: "1 Corinthiens 13:10",
    meditation:
      "Tout ce que tu connais maintenant est partiel — ta compréhension, ta joie, même ton amour. Mais un jour, le parfait viendra, et tout ce qui est incomplet sera englouti par la plénitude. Ce qui manque maintenant n\u2019est pas un signe de défaite — c\u2019est un signe que le meilleur n\u2019est pas encore arrivé.",
    question:
      "Quelle partie incomplète de ma vie puis-je confier à Celui qui achèvera toutes choses ?",
  },
  {
    verse:
      '"Ne crains point, car je suis avec toi ; ne t\u2019effraie point, car je suis ton Dieu ; je te fortifie, je viens à ton secours, je te soutiens de ma droite triomphante."',
    reference: "Ésaïe 41:10",
    meditation:
      "Quatre promesses en un seul verset : je suis avec toi, je suis ton Dieu, je te fortifie, je te soutiens. Tu n\u2019as pas besoin de plus. Quand la peur arrive, laisse-la se briser contre ces quatre murs.",
    question:
      "Laquelle de ces quatre promesses ai-je le plus besoin d\u2019entendre aujourd\u2019hui ?",
  },
  {
    verse:
      '"Or, à celui qui peut faire, par la puissance qui agit en nous, infiniment au-delà de tout ce que nous demandons ou pensons, à lui soit la gloire."',
    reference: "Éphésiens 3:20-21",
    meditation:
      "Tu demandes peu. Tu imagines davantage. Mais Dieu agit infiniment au-delà des deux. Tes limites ne sont pas ses limites. Et sa puissance agit déjà en toi — pas de l\u2019extérieur, mais de l\u2019intérieur.",
    question:
      "Où est-ce que je limite Dieu à ce que je peux imaginer ?",
  },
  {
    verse:
      '"Soyez donc sobres et veillez pour prier."',
    reference: "1 Pierre 4:7b",
    meditation:
      "La fin de toutes choses est proche — pas comme une menace, mais comme une perspective. Vis sobrement, veille dans la prière, et laisse l\u2019urgence de l\u2019éternité te donner une clarté tranquille pour aujourd\u2019hui.",
    question:
      "Comment l\u2019éternité change-t-elle la façon dont je prie aujourd\u2019hui ?",
  },
];

export default entries;