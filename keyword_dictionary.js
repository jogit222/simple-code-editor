const synthaxDB = {
  events: [
    "join","quit","death","respawn","click","break","place","interact","consume","pickup","craft","smelt","chat","move","world change","gamemode change","exp change","level up",
    "damage","heal","shoot","projectile hit","entity spawn","entity death","entity target","entity tame","entity breed","entity explode",
    "block burn","block fade","block grow","block spread","block ignite","block decay","block physics",
    "inventory open","inventory close","inventory click","inventory drag",
    "item drop","item merge","item despawn",
    "player kick","player ban","player unban","player bed enter","player bed leave","player fish","player teleport","player portal","player command",
    "server start","server stop","server reload",
    "weather change","thunder change","time change",
    "world load","world unload","chunk load","chunk unload",
    "redstone change","piston extend","piston retract","hopper pickup","hopper move",
    "sign change","map initialize","book edit","anvil prepare","brewing start","brewing finish","furnace burn","furnace smelt","furnace extract",
    "enchant item","prepare item craft","prepare anvil","trade select","villager acquire trade",
    "raid trigger","raid finish","bell ring","lightning strike","structure grow",
    "note play","jukebox play","jukebox stop",
    "dragon egg teleport","wither spawn","portal create","portal travel",
    "vehicle enter","vehicle exit","vehicle move","vehicle collide","vehicle destroy"
  ],

  functions: [
    "send","broadcast","kill","teleport","set","add","remove","clear","give","take","drop","spawn",
    "strike lightning","make","delete","stop","cancel event","damage","heal",
    "set health","set max health","feed","poison","ignite","extinguish",
    "push","pull","launch","apply potion effect","remove potion effect",
    "equip","unequip","enchant","repair","set name","set lore","set durability","trigger",

    "clear inventory","open inventory","close inventory","give exp","take exp",
    "set level","add level","reset level","set food","add food",
    "clear effects","play sound","stop sound","show title","show subtitle","clear title",
    "send actionbar","spawn particle","set weather","set time","add time",
    "set difficulty","set spawn","teleport all","heal all","damage all","kill all",
    "log"
  ],

  conditions: [
    "is","has","contains","exists","can","equals",
    "greater than","less than","between","within","inside",
    "holding","wearing","standing on",
    "flying","sneaking","sprinting","swimming","gliding","blocking",
    "alive","dead","burning","poisoned",
    "online","offline","op","banned","whitelisted",
    "empty","full",
    "and","or","not","isn't",

    "near","visible","raining","thundering","daytime","nighttime",
    "creative","survival","adventure","spectator",
    "moving","stationary"
  ],

  effects: [
    "send","broadcast","kill","teleport","set","add","remove","clear","give","take","drop","spawn",
    "strike lightning","make","delete","stop","cancel event","damage","heal",
    "set health","set max health","feed","poison","ignite","extinguish",
    "push","pull","launch","apply potion effect","remove potion effect",
    "equip","unequip","enchant","repair","set name","set lore","set durability",

    "clear inventory","open inventory","close inventory","give exp","take exp",
    "set level","add level","reset level","set food","add food",
    "clear effects","play sound","stop sound","show title","show subtitle","clear title",
    "send actionbar","spawn particle","set weather","set time","add time",
    "set difficulty","set spawn","teleport all","heal all","damage all","kill all"
  ],

  expressions: [
    "player","attacker","victim","shooter","damager","killer","death message",
    "projectile","clicked block","clicked entity",
    "event-block","event-entity","event-item","event-world","event-location",
    "distance between","location","world",
    "x coordinate","y coordinate","z coordinate","yaw","pitch","direction",
    "inventory","helmet","chestplate","leggings","boots","tool","offhand",
    "cursor slot","amount","name","lore","durability","max durability","enchantments",
    "gamemode","health","max health","food level","level","experience",
    "target","passengers","vehicle","velocity","fall distance","fire ticks",
    "time","weather","difficulty","spawn point","bed","first join",
    "money","balance","permissions","groups","prefix","suffix",
    "display name","tab list name",
    "scoreboard","teams",
    "command","console",
    "all players","online players","ops","banned players","whitelisted players",
    "radius","region","chunk","biome",

    "uuid","ip","ping",
    "playtime","kills","deaths"
  ],

  types: {
    mobs: [
      "zombie","skeleton","creeper","spider","enderman","pig","cow","sheep","chicken",
      "wolf","cat","villager","iron golem","blaze","ghast","wither","ender dragon",
      "phantom","drowned","husk","stray","witch","slime","magma cube","silverfish",
      "endermite","shulker","guardian","elder guardian","squid","bat","horse","donkey",
      "mule","llama","parrot","rabbit","polar bear","panda","fox","bee","strider",
      "hoglin","piglin","zombified piglin","zoglin","axolotl","goat","glow squid",
      "warden","frog","tadpole","allay","camel","sniffer"
    ],

    biomes: [
      "plains","forest","desert","savanna","taiga","jungle","swamp","mangrove swamp",
      "badlands","snowy plains","snowy taiga","snowy tundra","ice spikes",
      "mountains","windswept hills","windswept gravelly hills","windswept forest",
      "meadow","grove","jagged peaks","frozen peaks","stony peaks",
      "river","frozen river","beach","stony shore","ocean","deep ocean",
      "warm ocean","lukewarm ocean","cold ocean","frozen ocean",
      "mushroom fields","dripstone caves","lush caves","deep dark","nether wastes",
      "crimson forest","warped forest","soul sand valley","basalt deltas","the end"
    ],

    blocks: [
      "stone","granite","polished granite","diorite","polished diorite",
      "andesite","polished andesite","deepslate","cobbled deepslate","tuff",
      "calcite","dripstone block","amethyst block","budding amethyst","sculk",
      "sculk sensor","sculk shrieker","sculk catalyst",
      "grass block","dirt","coarse dirt","rooted dirt","podzol","mycelium",
      "sand","red sand","gravel","clay","snow","ice","packed ice","blue ice",
      "oak planks","spruce planks","birch planks","jungle planks","acacia planks",
      "dark oak planks","mangrove planks","cherry planks","crimson planks","warped planks",
      "oak log","spruce log","birch log","jungle log","acacia log","dark oak log",
      "mangrove log","cherry log","crimson stem","warped stem",
      "oak leaves","spruce leaves","birch leaves","jungle leaves","acacia leaves","dark oak leaves",
      "glass","tinted glass","sandstone","cut sandstone","smooth sandstone",
      "red sandstone","cut red sandstone","smooth red sandstone",
      "cobblestone","mossy cobblestone","stone bricks","mossy stone bricks",
      "cracked stone bricks","chiseled stone bricks",
      "bricks","bookshelf","obsidian","crying obsidian",
      "bedrock","water","lava","torch","soul torch","lantern","soul lantern",
      "chest","barrel","furnace","blast furnace","smoker","crafting table",
      "anvil","chipped anvil","damaged anvil","enchanting table","ender chest",
      "shulker box","hopper","dispenser","dropper","piston","sticky piston",
      "redstone","redstone torch","redstone lamp","lever","stone button",
      "oak button","oak door","iron door","oak trapdoor","iron trapdoor",
      "oak fence","oak fence gate","ladder","rail","powered rail","detector rail",
      "coal ore","iron ore","gold ore","diamond ore","emerald ore","lapis ore",
      "redstone ore","copper ore","nether quartz ore","nether gold ore","ancient debris"
    ],

    items: [
      "stick","string","feather","gunpowder","leather","paper","book",
      "slimeball","bone","ink sac","glow ink sac","honeycomb","honey bottle",
      "flint","coal","charcoal","iron ingot","gold ingot","netherite ingot",
      "diamond","emerald","lapis lazuli","redstone dust","quartz",

      "wooden sword","stone sword","iron sword","diamond sword","golden sword","netherite sword",
      "wooden pickaxe","stone pickaxe","iron pickaxe","diamond pickaxe","golden pickaxe","netherite pickaxe",
      "wooden axe","stone axe","iron axe","diamond axe","golden axe","netherite axe",
      "wooden shovel","stone shovel","iron shovel","diamond shovel","golden shovel","netherite shovel",
      "wooden hoe","stone hoe","iron hoe","diamond hoe","golden hoe","netherite hoe",
      "bow","crossbow","trident","shield","flint and steel","fishing rod",

      "leather helmet","leather chestplate","leather leggings","leather boots",
      "chainmail helmet","chainmail chestplate","chainmail leggings","chainmail boots",
      "iron helmet","iron chestplate","iron leggings","iron boots",
      "diamond helmet","diamond chestplate","diamond leggings","diamond boots",
      "golden helmet","golden chestplate","golden leggings","golden boots",
      "netherite helmet","netherite chestplate","netherite leggings","netherite boots",

      "apple","golden apple","enchanted golden apple","bread","carrot","potato",
      "baked potato","beetroot","beetroot soup","cookie","cake","pumpkin pie",
      "melon slice","sweet berries","glow berries","chorus fruit",
      "cooked beef","cooked porkchop","cooked chicken","cooked mutton",
      "cooked cod","cooked salmon",

      "bucket","water bucket","lava bucket","milk bucket","powder snow bucket",
      "ender pearl","ender eye","blaze rod","blaze powder","nether star",
      "elytra","totem of undying","spyglass","bundle","brush"
    ],

    potions: [
      "speed","slowness","haste","mining fatigue","strength","instant health",
      "instant damage","jump boost","nausea","regeneration","resistance",
      "fire resistance","water breathing","invisibility","blindness",
      "night vision","hunger","weakness","poison","wither",
      "health boost","absorption","saturation","glowing","levitation",
      "luck","unluck","slow falling","conduit power","dolphins grace","bad omen"
    ],

    enchantments: [
      "protection","fire protection","feather falling","blast protection","projectile protection",
      "thorns","respiration","aqua affinity","depth strider","frost walker",
      "soul speed","sharpness","smite","bane of arthropods","knockback",
      "fire aspect","looting","sweeping edge","efficiency","silk touch",
      "unbreaking","fortune","power","punch","flame","infinity",
      "mending","curse of vanishing","curse of binding"
    ],

    misc: []
  },


  sections: ["if","else if","else","while","loop","for","foreach","switch","case","default"],

  structures: ["if","else if","else","while","loop","function","event","command","task"],

  misc: [
    "wait","exit","continue","return","options","variables",
    "tick","ticks","second","seconds","minute","minutes","hour","hours","day","days"
  ]
};
