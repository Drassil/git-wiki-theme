### AzerothCore Memory Usage

AzerothCore is based on SunwellCore (a fork from TC). SunwellCore was a public server with 4000 players online and they made sure their core could handle that amount of players easily. Reading data from the ram is much faster than reading from the hard disk (there are entire systems based on this principle). That's one of the reason there is a bigger ram usage.

#### RAM Requirements

| Number of players | Minimum RAM requirement |
|-------------------|-------------------------|
| 1-5               |   4 GB                  |
| 10                |   6 GB                  |
| 100               |  16 GB                  |
| >100              | >16 GB                  |

We recommend at least 16 GB as the server will gradually cache the world maps as the players explore them which finally takes up to at least 11 GB of RAM usage.
