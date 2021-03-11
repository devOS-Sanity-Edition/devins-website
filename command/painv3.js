// formatting goes [[bold/italic/underline;#hex/color name for text;#hex/colorname for background]text here]
// leave blank in any of the formatting if you dont wanna use it, like [[b;;;]text] will just be a bolded "text"
// or [[;#00a86b;;]green] will be "green" in hex code #00a86b 

// for hyperlinks, use [[!;;;;linkhere]text], same formatting is used for the original, just the extra ; is for links i believe
// for images. use [[@;;;;linkhere]]

var randomTitle = `{
    "randomTitles" : 
    [ 
        "aaaaaaaaaaaaaaaaaaaaaaaaaaa",
        "owo uwu end my miserwy",
        "fukc",
        "icasnthsothavingstorkes", 
        "owo uwu owo",
        "meep",
        "beep beep i fell in a ditch",
        "happy covidween",
        "Did you know that this is random every time?",
        "If you see this, it works!",
        "follow me on [[!;#8DD594;;;]twitter]",
        "hewwo owo",
        "brb, yeeting myself out of existence",
        "what is life",
        "play [[!;#8DD594;;;https://g4.hiitsdevin.dev/g4x]G4X] please!"
    ]
}`
let onloadStrings = JSON.parse(randomTitle).randomTitles;

let genNumber = Math.floor(Math.random()*onloadStrings.length);

$('body').terminal({
    help: function() { //Help command
        this.echo('Commands: \n' 
        + '\n' + '[[b;#57D2CA;;]about]' + ' - About Devin'
        + '\n' + '[[b;#57D2CA;;]specs]' + ' - Shows Devin\'s PC Specs and Peripherals' 
        + '\n' + '[[b;#57D2CA;;]nyan]' + '- Shows a nyan cat'
        + '\n' + '[[b;#57D2CA;;]ismdotf]' + '- UHHHHHHHHH'
        + '\n' + '[[b;#57D2CA;;]updatelog]' + '- Shows the update log'
        + '\n' + '[[b;#57D2CA;;]cat]' + '- Cat'
        + '\n' + '[[b;#57D2CA;;]nyoom]' + '- uh oh');
    },
    specs: function() { // Shows PC specs
        this.echo('\n' + '[[;#c3d85e;;]HiItsDevin_\'s]' + '[[;#8dd594;;] Computer]' + '[[;#57d2ca;;] Specs:] \n'
        + '\n' 
        + '[[;#7BD4A6;;]                           ....iilll    ]'                     + '[[b;#C3D85E;;]devin]' + '[[b;#A8D779;;]@]' + '[[b;#8DD594;;]hiitsdevin]' + '[[b;#72D4AF;;].]' + '[[b;#57D2CA;;]dev]' + '\n' 
        + '[[;#7BD4A6;;]                 ....iilllllllllllll    ]'                     + '[[;#C3D85E;;]══]' + '[[;#B9D768;;]══]' + '[[;#AFD772;;]══]' + '[[;#A6D67B;;]══]' + '[[;#9CD685;;]══]' + '[[;#92D58F;;]══]' + '[[;#88D599;;]══]' + '[[;#7ED4A3;;]══]' + '[[;#74D4AD;;]══]' + '[[;#6BD3B6;;]══]' + '[[;#61D3C0;;]══]' + '[[;#57D2CA;;]══]' + '\n' 
        + '[[;#C3D85E;;]       ..oodMMM  ]' + '[[;#7BD4A6;;]lllllllllllllllllll    ]'      + '[[b;#C3D85E;;]OS: ]' + 'Windows 10 Pro - Build 1909 + Arch Linux + rEFInd Bootloader\n' 
        + '[[;#C3D85E;;] oodMMMMMMMMMMM  ]' + '[[;#7BD4A6;;]lllllllllllllllllll    ]'      + '[[b;#C3D85E;;]Host: ]' + 'AsusTek Computer Inc.\n' 
        + '[[;#C3D85E;;] MMMMMMMMMMMMMM  ]' + '[[;#7BD4A6;;]lllllllllllllllllll    ]'      + '[[b;#ADD774;;]Kernel: ]' + '10.0.18363\n' 
        + '[[;#C3D85E;;] MMMMMMMMMMMMMM  ]' + '[[;#7BD4A6;;]lllllllllllllllllll    ]'      + '[[b;#ADD774;;]Resolution: ]' + '1 x 1080p120hz, 1 x 1080p60hz\n' 
        + '[[;#C3D85E;;] MMMMMMMMMMMMMM  ]' + '[[;#7BD4A6;;]lllllllllllllllllll    ]'      + '[[b;#98D689;;]CPU: ]' + '[[b;#ff9b9b;;]AMD Ryzen 7 3750H]' + '\n' 
        + '[[;#C3D85E;;] MMMMMMMMMMMMMM  ]' + '[[;#7BD4A6;;]lllllllllllllllllll    ]'      + '[[b;#98D689;;]GPU: ]' + '[[b;#ff9b9b;;]AMD RX Vega 10]' + '\n' 
        + '[[;#C3D85E;;] MMMMMMMMMMMMMM  ]' + '[[;#7BD4A6;;]lllllllllllllllllll    ]'      + '[[b;#8DD594;;]GPU: ]' + '[[b;#8DD594;;]NVIDIA GTX 1660ti Max-Q]' + '\n' 
        + '                                        '                                + '[[b;#82D49F;;]Memory: ]' + '24576MiB DDR4-2400\n' 
        + '[[;#9FD682;;] llllllllllllll]' + '[[;#57D2CA;;]  MMMMMMMMMMMMMMMMMMM    ]'   + '\n' 
        + '[[;#9FD682;;] llllllllllllll]' + '[[;#57D2CA;;]  MMMMMMMMMMMMMMMMMMM    ]'   + '[[b;#82D49F;;]Model: ]' + 'ASUS ROG Zephyrus G GA502DU\n'
        + '[[;#9FD682;;] llllllllllllll]' + '[[;#57D2CA;;]  MMMMMMMMMMMMMMMMMMM    ]'   +  '\n'
        + '[[;#9FD682;;] llllllllllllll]' + '[[;#57D2CA;;]  MMMMMMMMMMMMMMMMMMM    ]'   + '[[b;#6DD3B4;;]My CPU-Z: ]' + '[[;#8DD594;;]https://valid.x86.fr/yxkqwp]' + '\n' 
        + '[[;#9FD682;;] llllllllllllll]' + '[[;#57D2CA;;]  MMMMMMMMMMMMMMMMMMM    ]'   + '\n' 
        + '[[;#9FD682;;] llllllllllllll]' + '[[;#57D2CA;;]  MMMMMMMMMMMMMMMMMMM    ]'   + '[[b;#6DD3B4;;]Peripherals: ]' + 'Razer BlackWidow Elite 2020 + Razer Mamba Elite +' + '\n' 
        + '[[;#9FD682;;] `^^^^^^lllllll]' + '[[;#57D2CA;;]  MMMMMMMMMMMMMMMMMMM]    '   + 'Razer Kraken Headphones + Razer Seiren X + BenQ GW2480 Monitor +\n' 
        + '[[;#9FD682;;]       ````^^^^]' + '[[;#57D2CA;;]  ^^MMMMMMMMMMMMMMMMM]    '   + 'Logitech C615 Webcam\n' 
        + '[[;#57D2CA;;]                      ````^^^^^^MMMM    ]'                   + '\n' 
        + '[[b;cyan;;]                                        ]'                    + '[[b;#57D2CA;;]VR Headset: ]' + 'Samsung HMD Odyssey+ - Windows Mixed Reality' + '\n' + '\n'
        + '[[b;cyan;;]                                        ]'                    + '[[b;#57D2CA;;]Phone: ]' + 'Samsung Galaxy Note9 - US Snapdragon 845 - Model N960U1' + '\n' + '\n'
        + '[[@;;;;https://i.hiitsdevin.dev/captures/hid_720679.png]]' + '\n'
        + '\n') // the formatting for all over this took well over 6-7 hours, please appreciate it or else im going to cry
    },
    nyan: function() { // Nyan Cat moment
        this.echo('[[@;;;;https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/67401945-34fc-46b8-8e8f-1982847277d4/ddba22b-2fad9d00-1d3f-4ec8-a65d-199a09dfa4e1.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNjc0MDE5NDUtMzRmYy00NmI4LThlOGYtMTk4Mjg0NzI3N2Q0XC9kZGJhMjJiLTJmYWQ5ZDAwLTFkM2YtNGVjOC1hNjVkLTE5OWEwOWRmYTRlMS5naWYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ._-whxwEBEaTLWUvSWL80KTGiwpoy9dSPzXSRhfTAzeM]]');
    },
    ismdotf: function() { // I SLAMMED MY DICK ON THE FRIDGE POG
        this.echo('[[@;;;;https://i.hiitsdevin.dev/captures/hid_442482.png]]' + '\n')
    },
    potato: function() { // ughhhhhhhhhhhhhhhhhhhhhhhhhhhhh
        this.echo('[[b;red;;]Fuck off Cobalt.]')
    },
    about: function() { // About Devin
        this.echo('\n' 
        + '[[;#C3D85E;;]████]' + '[[;#B9D768;;]████]' + '[[;#AFD772;;]████]' + '[[;#A6D67B;;]████]' + '[[;#9CD685;;]████]' + '[[;#92D58F;;]████]' + '[[;#88D599;;]████]' + '[[;#7ED4A3;;]████]' + '[[;#74D4AD;;]████]' + '[[;#6BD3B6;;]████]' + '[[;#61D3C0;;]████]' + '[[;#57D2CA;;]████]'
        + '[[@;;;;https://i.hiitsdevin.dev/captures/hid_295629.png]]' 
        + '[[;#57D2CA;;]████]' + '[[;#61D3C0;;]████]' + '[[;#6BD3B6;;]████]' + '[[;#74D4AD;;]████]' + '[[;#7ED4A3;;]████]' + '[[;#88D599;;]████]' + '[[;#92D58F;;]████]' + '[[;#9CD685;;]████]' + '[[;#A6D67B;;]████]' + '[[;#AFD772;;]████]' + '[[;#B9D768;;]████]' + '[[;#C3D85E;;]████]'
        + '\n'
        + '\n'
        + 'Hello! My name is ' + '[[b;#8DD594;;]Devin!]' + '\nI make graphics, I guess, and I code. I also am 🏳‍🌈 Gay.\n'
        + '\n'
        + 'Pronouns: Any work, I personally prefer He/Him though, I\'m a cis-male.\n'
        + '\n'
        + 'Projects I\'ve worked on:\n'
        + '    ➔ ' + '[[!;#C3D85E;;;https://github.com/Team-G4/g4x/]G4X - An infinite puzzle rage game by Team G4 ported to Windows, macOS, and Linux with Discord Rich Presence]' + '\n'
        + '    ➔ ' + '[[!;#C3D85E;;;https://steamcommunity.com/sharedfiles/filedetails/?id=2152311955]HiItsDevin_\'s Home Environment - SteamVR]' + '\n'
        + '\n'
        + 'My Graphic Design Portfolios:\n'
        + '    ➔ ' + '[[!;#9FD682;;;https://www.behance.net/hiitsdevin_]Behance]' + '\n'
        + '    ➔ ' + '[[!;#9FD682;;;https://hiitsdevin_design.artstation.com/]ArtStation]' + '\n'
        + '\n'
        + 'My Accounts:\n'
        + '    ➔ ' + '[[!;#7BD4A6;;;https://twitter.com/HiItsDevin_]Twitter]' + '\n'
        + '    ➔ ' + '[[!;#7BD4A6;;;https://github.com/HiItsDevin]GitHub]' + '\n'
        + '    ➔ ' + '[[!;#7BD4A6;;;https://git.hiitsdevin.dev/HiItsDevin_]My Git Server]' + '\n'
        + '\n'
        + 'Computer Specs: \n'
        + '    ➔ Do the \"' + '[[b;#57D2CA;;]specs]' + '\" command'
        + '\n'
        + 'Donations: \n'
        + 'If you want to donate to me, feel free!' + '\n'
        + '    ➔[[!;#57D2CA;;;https://ko-fi.com/HiItsDevin_]Ko-Fi]') // the formatting for this took 2-3 hours, please appreciate
    },
    updatelog: function() {
        this.echo('\n'
        + 'Update Log:\n'
        + 'v1: Initial Upload\n'
        + 'v1.1: Added Randomized Greeting + updatelog command\n'
        + 'v1.2: Added rm command \[only 2 args pls\] and updated the about command\n'
        + 'v1.3: Added Edition text\n'
        + 'v1.4: Added cat and nyoom')
    },
    rm: function(arg1, arg2) {
        this.echo('[[;red;;]Restarting\/Closing session...]')    
        alert('Restarting\/Closing session...')
        open(location, '_self').close();
    },
    nyoom: function() {
        this.echo('＜⌒／ヽ-､＿\n／＜/＿＿＿＿／\n\n\n　　　∧∧\n　　 (　･ω･)\n　 ＿|　⊃／(＿ WHICH CAT JUST HIT THE GLASS DOOR OH MY GOD\n／　└-(＿＿＿_／\n￣￣￣￣￣￣￣\n\n')
    },
    cat: function() {
        this.echo('＜⌒／ヽ-､＿\n／＜/＿＿＿＿／\n\n\n　　　∧∧\n　　 (　･ω･)\n　 ＿|　⊃／(＿ IS IT THE GAS STOVE THAT IS HISSING OR THE CAT\n／　└-(＿＿＿_／\n￣￣￣￣￣￣￣\n\n')
    },
}, {
    greetings: "[[;#C3D85E;;]██╗  ██╗██╗██╗████████╗███████╗██████╗ ███████╗██╗   ██╗██╗███╗   ██╗        ]" + "\n" 
    + "[[;#ADD774;;]██║  ██║██║██║╚══██╔══╝██╔════╝██╔══██╗██╔════╝██║   ██║██║████╗  ██║        ]" + "\n" 
    + "[[;#98D689;;]███████║██║██║   ██║   ███████╗██║  ██║█████╗  ██║   ██║██║██╔██╗ ██║        ]" + "\n"
    + "[[;#82D49F;;]██╔══██║██║██║   ██║   ╚════██║██║  ██║██╔══╝  ╚██╗ ██╔╝██║██║╚██╗██║        ]" + "\n"
    + "[[;#6DD3B4;;]██║  ██║██║██║   ██║   ███████║██████╔╝███████╗ ╚████╔╝ ██║██║ ╚████║███████╗]" + "\n"
    + "[[;#57D2CA;;]╚═╝  ╚═╝╚═╝╚═╝   ╚═╝   ╚══════╝╚═════╝ ╚══════╝  ╚═══╝  ╚═╝╚═╝  ╚═══╝╚══════╝]" + "\n" 
    + "\n"
    + "[[s;#C3D85E;;]California]" + "[[;#C3D85E;;] Fall Edition]" + "\n"
    + "\n"
    + "[[;#C3D85E;;]Random Message of the session: ]" + onloadStrings[genNumber] + '\n\n'
    + "Welcome to " + "[[g;#C3D85E;;]Hi]" + "[[g;#8DD594;;]Its]" + "[[g;#57D2CA;;]Devin_]" + "\'s Website! Type \"" + "[[b;#57D2CA;;]help]" + "\" to begin. c:\n"
});