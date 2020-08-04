from enum import Enum, auto, unique

ACTIVE_SESSIONS_LIMIT = 25
MOUSE_EVENTS_THRESHOLD = 1
LOWER_LIMIT_RGB = 0
UPPER_LIMIT_RGB = 225
NO_EXPR_RGB = 166
COUNTS_PER_MILLION = 1000000


@unique
class Species(Enum):
    DMEL = auto()
    HSAP = auto()
    MMUS = auto()
    UNKN = auto()


SPECIES_MAP = {
    Species.DMEL: {"short": "Fly", "long": "Drosophila Melanogaster"},
    Species.HSAP: {"short": "Human", "long": "Homo Sapiens"},
    Species.MMUS: {"short": "Mouse", "long": "Mus Musculus"},
    Species.UNKN: {"short": "Unknown", "long": "Unknown Species"},
}

BIG_COLOR_LIST = [
    "ff0000",
    "ffc480",
    "149900",
    "307cbf",
    "d580ff",
    "cc0000",
    "bf9360",
    "1d331a",
    "79baf2",
    "deb6f2",
    "990000",
    "7f6240",
    "283326",
    "2d4459",
    "8f00b3",
    "4c0000",
    "ccb499",
    "00f220",
    "accbe6",
    "520066",
    "330000",
    "594f43",
    "16591f",
    "697c8c",
    "290033",
    "cc3333",
    "e59900",
    "ace6b4",
    "262d33",
    "ee00ff",
    "e57373",
    "8c5e00",
    "2db350",
    "295ba6",
    "c233cc",
    "994d4d",
    "664400",
    "336641",
    "80b3ff",
    "912699",
    "663333",
    "332200",
    "86b392",
    "4d6b99",
    "3d1040",
    "bf8f8f",
    "cc9933",
    "4d6653",
    "202d40",
    "c566cc",
    "8c6969",
    "e5bf73",
    "008033",
    "0044ff",
    "944d99",
    "664d4d",
    "594a2d",
    "39e67e",
    "00144d",
    "a37ca6",
    "f2553d",
    "403520",
    "30bf7c",
    "3d6df2",
    "ff80f6",
    "a63a29",
    "ffeabf",
    "208053",
    "2d50b3",
    "73396f",
    "bf6c60",
    "736956",
    "134d32",
    "13224d",
    "4d264a",
    "402420",
    "f2c200",
    "53a67f",
    "7391e6",
    "735671",
    "ffc8bf",
    "8c7000",
    "003322",
    "334166",
    "40303f",
    "ff4400",
    "ccad33",
    "3df2b6",
    "a3b1d9",
    "ff00cc",
    "b23000",
    "594c16",
    "00bf99",
    "737d99",
    "8c0070",
    "7f2200",
    "ffe680",
    "66ccb8",
    "393e4d",
    "331a2e",
    "591800",
    "b2a159",
    "2d5950",
    "00138c",
    "ffbff2",
    "330e00",
    "7f7340",
    "204039",
    "364cd9",
    "b30077",
    "ff7340",
    "ffee00",
    "b6f2e6",
    "1d2873",
    "40002b",
    "cc5c33",
    "403e20",
    "608079",
    "404880",
    "e639ac",
    "994526",
    "bfbc8f",
    "00998f",
    "1a1d33",
    "731d56",
    "f29979",
    "8c8a69",
    "00736b",
    "0000f2",
    "ff80d5",
    "8c5946",
    "778000",
    "39e6da",
    "0000d9",
    "a6538a",
    "59392d",
    "535900",
    "005359",
    "0000bf",
    "f20081",
    "bf9c8f",
    "3b4000",
    "003c40",
    "2929a6",
    "660036",
    "735e56",
    "ced936",
    "30b6bf",
    "bfbfff",
    "bf8fa9",
    "403430",
    "fbffbf",
    "23858c",
    "8273e6",
    "d90057",
    "f26100",
    "ccff00",
    "79eaf2",
    "332d59",
    "a60042",
    "bf4d00",
    "cfe673",
    "7ca3a6",
    "14004d",
    "bf3069",
    "331400",
    "8a994d",
    "394b4d",
    "170d33",
    "8c234d",
    "ff8c40",
    "494d39",
    "005266",
    "a799cc",
    "bf6086",
    "995426",
    "a3d936",
    "39c3e6",
    "7d7399",
    "804059",
    "733f1d",
    "739926",
    "23778c",
    "290066",
    "59434c",
    "f2aa79",
    "88ff00",
    "0d2b33",
    "8c40ff",
    "b20030",
    "b27d59",
    "3d7300",
    "59a1b3",
    "622db3",
    "7f0022",
    "7f5940",
    "294d00",
    "acdae6",
    "2a134d",
    "40101d",
    "33241a",
    "4e6633",
    "566d73",
    "7453a6",
    "f27999",
    "ffd9bf",
    "bfd9a3",
    "00aaff",
    "4c4359",
    "4d2630",
    "8c7769",
    "92a67c",
    "006699",
    "2b2633",
    "ffbfd0",
    "ff8800",
    "52cc00",
    "002b40",
    "6d00cc",
    "99737d",
    "a65800",
    "234010",
    "3399cc",
    "4b008c",
    "33262a",
    "663600",
    "a1ff80",
    "86a4b3",
    "9c66cc",
    "7f0011",
    "331b00",
    "79bf60",
    "007ae6",
    "583973",
    "f23d55",
    "cc8533",
    "518040",
    "003059",
    "312040",
    "59161f",
    "4c3213",
    "688060",
    "001b33",
    "69238c",
    "bf606c",
]
