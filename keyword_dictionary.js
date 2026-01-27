const synthaxDB = {
  events: [
    "onjoin","on quit","on death","on respawn",
    "on block break","on block place","on interact","on click","on consume","on pickup",
    "on craft","on smelt","on chat","on move",
    "on world change","on changed world",
    "on gamemode change","on exp change","on level up",
    "on damage","on heal","on shoot","on projectile hit",
    "on entity spawn","on entity death","on entity target",
    "on block burn","on block fade","on block grow","on block spread",
    "on inventory open","on inventory close","on inventory click",
    "on item drop","on item despawn",
    "on player kick","on player bed enter","on player bed leave",
    "on player fish","on player teleport","on player portal",
    "on server start","on server stop",
    "on weather change","on thunder change","on time change",
    "on world load","on world unload","on chunk load","on chunk unload"
  ],

  functions: [
    "send","broadcast","kill","teleport","set","add","remove","clear","give","take","drop","spawn",
    "strike lightning","make","delete","stop","cancel event","damage","heal",
    "feed","poison","ignite","extinguish",
    "push","pull","launch","apply potion effect","remove potion effect",
    "equip","unequip","enchant","repair","set name","set lore","set durability","trigger",

    "clear inventory","open inventory","close inventory","give exp","take exp",
    "set level","add level","reset level","set food","add food",
    "clear effects","play sound","stop sound","show title","show subtitle","clear title",
    "send actionbar","spawn particle","set weather","set time","add time",
    "set difficulty","set spawn",
    "log","broadcast"
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
    "near","visible","raining","thundering","daytime","nighttime"
  ],

  effects: [
    "send","broadcast","kill","teleport","set","add","remove","clear","give","take","drop","spawn",
    "strike lightning","make","delete","stop","cancel event","damage","heal",
    "feed","poison","ignite","extinguish",
    "push","pull","launch","apply potion effect","remove potion effect",
    "equip","unequip","enchant","repair","set name","set lore","set durability",

    "clear inventory","open inventory","close inventory","give exp","take exp",
    "set level","add level","reset level","set food","add food",
    "clear effects","play sound","stop sound","show title","show subtitle","clear title",
    "send actionbar","spawn particle","set weather","set time","add time",
    "set difficulty","set spawn"
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
    "permissions",
    "display name","tab list name",
    "scoreboard","teams",
    "command","console",
    "all players","online players","ops","banned players","whitelisted players",
    "radius","region","chunk","biome",

    "uuid","ip","ping",
    "playtime","kills","deaths",
    "arg-1","arg-2"
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
      "stick","sticks","string","strings","feather","feathers","gunpowder","leather","paper","book","books",
      "slimeball","slimeballs","bone","bones","ink sac","ink sacs","glow ink sac","glow ink sacs","honeycomb","honey bottle",
      "flint","coal","charcoal","iron ingot","iron ingots","gold ingot","gold ingots","netherite ingot","netherite ingots",
      "diamond","diamonds","emerald","emeralds","lapis lazuli","redstone dust","quartz",

      "wooden sword","stone sword","iron sword","diamond sword","golden sword","netherite sword",
      "wooden pickaxe","stone pickaxe","iron pickaxe","diamond pickaxe","golden pickaxe","netherite pickaxe",
      "wooden axe","stone axe","iron axe","diamond axe","golden axe","netherite axe",
      "wooden shovel","stone shovel","iron shovel","diamond shovel","golden shovel","netherite shovel",
      "wooden hoe","stone hoe","iron hoe","diamond hoe","golden hoe","netherite hoe",
      "bow","bows","crossbow","crossbows","trident","tridents","shield","shields","flint and steel","fishing rod",

      "leather helmet","leather chestplate","leather leggings","leather boots",
      "chainmail helmet","chainmail chestplate","chainmail leggings","chainmail boots",
      "iron helmet","iron chestplate","iron leggings","iron boots",
      "diamond helmet","diamond chestplate","diamond leggings","diamond boots",
      "golden helmet","golden chestplate","golden leggings","golden boots",
      "netherite helmet","netherite chestplate","netherite leggings","netherite boots",

      "apple","apples","golden apple","enchanted golden apple","bread","carrot","potato",
      "baked potato","beetroot","beetroot soup","cookie","cookies","cake","pumpkin pie",
      "melon slice","sweet berries","glow berries","chorus fruit",
      "cooked beef","cooked porkchop","cooked chicken","cooked mutton",
      "cooked cod","cooked salmon",

      "bucket","buckets","water bucket","lava bucket","milk bucket","powder snow bucket",
      "ender pearl","ender pearls","ender eye","ender eyes","blaze rod","blaze rods",
      "blaze powder","nether star","elytra","totem of undying","spyglass","bundle","brush"
    ],

    potions: [
      "speed potion","slowness potion","haste potion","mining fatigue potion",
      "strength potion","healing potion","harming potion","jump boost potion",
      "nausea potion","regeneration potion","resistance potion",
      "fire resistance potion","water breathing potion","invisibility potion",
      "blindness potion","night vision potion","hunger potion","weakness potion",
      "poison potion","wither potion","health boost potion","absorption potion",
      "saturation potion","glowing potion","levitation potion",
      "luck potion","unluck potion","slow falling potion",
      "conduit power potion","dolphins grace potion","bad omen potion"
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

  sections: ["if","else if","else","while","loop"],

  structures: ["function","event","command","options","variables"],

  misc: [
    "wait","exit","continue","return","options","variables",
    "tick","ticks","second","seconds","minute","minutes","hour","hours","day","days"
  ]
};
