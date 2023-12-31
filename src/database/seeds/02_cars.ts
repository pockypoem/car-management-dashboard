import { Knex } from "knex";


const tableName = "cars";
export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex(tableName).del();

    const cars = [
        {
          id: "6e2bc663-5197-441a-957b-bc75e4a2da7c",
          plate: "DBH-3491",
          manufacture: "Ford",
          model: "F150",
          image: "https://i.ibb.co/58nQ0C0/car01-min.jpg",
          rentPerDay: 200000,
          capacity: 2,
          description: " Brake assist. Leather-wrapped shift knob. Glove box lamp. Air conditioning w/in-cabin microfilter.",
          availableAt: "2024-01-15T07:49:05.563Z",
          transmission: "Automatic",
          available: true,
          type: "Sedan",
          year: 2022,
          options: [
            "Cruise Control",
            "Tinted Glass",
            "Tinted Glass",
            "Tinted Glass",
            "AM/FM Stereo"
          ],
          specs: [
            "Brake assist",
            "Leather-wrapped shift knob",
            "Glove box lamp",
            "Air conditioning w/in-cabin microfilter",
            "Body color folding remote-controlled pwr mirrors",
            "Dual-stage front airbags w/occupant classification system"
          ],
          createdBy: "2625c868-55d3-4655-a3b1-f1e4416b39ce",
          updatedBy: "2625c868-55d3-4655-a3b1-f1e4416b39ce"
        },
        {
          id: "9ff03bbc-b18c-4ba7-8f3a-4c4b5c2f6c77",
          plate: "WXB-3984",
          manufacture: "BMW",
          model: "X5",
          image: "https://i.ibb.co/7G5vDvs/car02-min.jpg",
          rentPerDay: 800000,
          capacity: 6,
          description: " Rear passenger map pockets. Electrochromic rearview mirror. Dual chrome exhaust tips. Locking glove box.",
          availableAt: "2024-01-20T06:49:05.563Z",
          transmission: "Automatic",
          available: false,
          type: "Convertible",
          year: 2019,
          options: [
            "Keyless Entry",
            "Power Windows",
            "MP3 (Single Disc)",
            "CD (Multi Disc)",
            "Navigation"
          ],
          specs: [
            "Rear passenger map pockets",
            "Electrochromic rearview mirror",
            "Dual chrome exhaust tips",
            "Locking glove box",
            "Pwr front vented disc/rear drum brakes"
          ],
          createdBy: "2625c868-55d3-4655-a3b1-f1e4416b39ce",
          updatedBy: "2625c868-55d3-4655-a3b1-f1e4416b39ce"
        },
        {
          id: "bf6b5c43-1377-4ae0-8908-310c64266f81",
          plate: "OSL-4224",
          manufacture: "Lincoln",
          model: "MKZ",
          image: "https://i.ibb.co/G7VMHxZ/car03-min.jpg",
          rentPerDay: 900000,
          capacity: 6,
          description: " Driver & front passenger map pockets. Direct-type tire pressure monitor system. Cargo area lamp. Glove box lamp.",
          availableAt: "2024-01-23T08:49:05.563Z",
          transmission: "Automanual",
          available: true,
          type: "Sedan",
          year: 2021,
          options: [
            "Bucket Seats",
            "Airbag: Passenger",
            "Airbag: Driver",
            "Power Seats",
            "Airbag: Side",
            "Antilock Brakes",
            "CD (Multi Disc)"
          ],
          specs: [
            "Driver & front passenger map pockets",
            "Direct-type tire pressure monitor system",
            "Cargo area lamp",
            "Glove box lamp",
            "Silver finish interior door handles",
            "Driver & front passenger advanced multistage airbags w/occupant sensors",
            "Silver accent IP trim finisher -inc: silver shifter finisher",
            "Fasten seat belt warning light/chime"
          ],
          createdBy: "2625c868-55d3-4655-a3b1-f1e4416b39ce",
          updatedBy: "2625c868-55d3-4655-a3b1-f1e4416b39ce"
        },
        {
          id: "5b67f1d7-92d4-41c7-8577-4435740aadf1",
          plate: "VPT-9753",
          manufacture: "BMW",
          model: "M5",
          image: "https://i.ibb.co/2ZhC8PQ/car04-min.jpg",
          rentPerDay: 900000,
          capacity: 6,
          description: " 6.1L SRT V8 \"Hemi\" engine.",
          availableAt: "2024-01-25T09:00:05.563Z",
          transmission: "Manual",
          available: true,
          type: "Hatchback",
          year: 2018,
          options: [
            "Alloy Wheels",
            "Power Locks",
            "A/C: Rear",
            "MP3 (Single Disc)",
            "Airbag: Driver",
            "A/C: Front",
            "Tinted Glass",
            "Alloy Wheels",
            "Alarm"
          ],
          specs: [
            "6.1L SRT V8 \"Hemi\" engine",
            "Multi-info display -inc: driving range, average MPG, current MPG, average speed, outside temp, elapsed time, maintenance & diagnostic messages",
            "Front & rear passenger folding assist grips",
            "Electronic throttle control system w/intelligence (ETCS-i)",
            "Pwr tilt/slide moonroof -inc: 1-touch open/close",
            "Acoustic glass windshield"
          ],
          createdBy: "2625c868-55d3-4655-a3b1-f1e4416b39ce",
          updatedBy: "2625c868-55d3-4655-a3b1-f1e4416b39ce"
        },
        {
          id: "23574b8f-3e89-4685-a348-67c1f7e5b3c4",
          plate: "BHD-3923",
          manufacture: "Lincoln",
          model: "Navigator",
          image: "https://i.ibb.co/J51QXrr/car05-min.jpg",
          rentPerDay: 200000,
          capacity: 2,
          description: " Body color sill extension. Torsion beam rear suspension w/stabilizer bar. Front & rear passenger folding assist grips.",
          availableAt: "2024-01-28T08:00:05.563Z",
          transmission: "Automatic",
          available: false,
          type: "Minivan",
          year: 2020,
          options: [
            "CD (Multi Disc)",
            "Cruise Control",
            "Power Locks",
            "Alloy Wheels",
            "Tow Package"
          ],
          specs: [
            "Body color sill extension",
            "Torsion beam rear suspension w/stabilizer bar",
            "Front & rear passenger folding assist grips",
            "Electronic control braking (ECB)",
            "Black windshield molding"
          ],
          createdBy: "fe2aafe6-9118-4ae5-abc0-ee5b9a9e9fd6",
          updatedBy: "fe2aafe6-9118-4ae5-abc0-ee5b9a9e9fd6"
        },
        {
          id: "3eead6db-c536-406b-9bc5-85d4c6e38a76",
          plate: "JPM-5482",
          manufacture: "Ford",
          model: "Fiesta",
          image: "https://i.ibb.co/h9zCC4t/car06-min.jpg",
          rentPerDay: 900000,
          capacity: 4,
          description: " Tilt steering column. Carpeted cargo area. Tip start system. Leather-wrapped shift knob.",
          availableAt: "2024-01-28T09:49:05.563Z",
          transmission: "Automanual",
          available: true,
          type: "Hatchback",
          year: 2016,
          options: [
            "Leather Interior",
            "A/C: Rear",
            "CD (Multi Disc)",
            "Airbag: Side",
            "MP3 (Multi Disc)"
          ],
          specs: [
            "Tilt steering column",
            "Carpeted cargo area",
            "Tip start system",
            "Leather-wrapped shift knob",
            "Enhanced accident response system unlocks the doors, shuts off the fuel pump and turns on interior lights after airbag deploys",
            "Compact spare tire"
          ],
          createdBy: "fe2aafe6-9118-4ae5-abc0-ee5b9a9e9fd6",
          updatedBy: "fe2aafe6-9118-4ae5-abc0-ee5b9a9e9fd6"
        },
        {
          id: "752685ce-dd39-40e5-9af5-93fdd36dea7e",
          plate: "BTW-1960",
          manufacture: "Honda",
          model: "Accord",
          image: "https://i.ibb.co/GCRQHbr/car07-min.jpg",
          rentPerDay: 900000,
          capacity: 4,
          description: " Silver finish interior door handles. 160-amp alternator. Tire pressure monitoring system (TPMS). Cloth covered headliner.",
          availableAt: "2024-01-29T08:30:05.563Z",
          transmission: "Automatic",
          available: false,
          type: "Sedan",
          year: 2020,
          options: [
            "AM/FM Stereo",
            "Power Windows",
            "Power Locks",
            "Power Windows",
            "MP3 (Single Disc)",
            "A/C: Rear"
          ],
          specs: [
            "Silver finish interior door handles",
            "160-amp alternator",
            "Tire pressure monitoring system (TPMS)",
            "Cloth covered headliner",
            "625-amp maintenance-free battery",
            "Torsion beam rear suspension w/stabilizer bar",
            "Impact-dissipating upper interior trim",
            "Dual front 2-stage airbags -inc: passenger occupant classification system w/twin-chamber airbag"
          ],
          createdBy: "fe2aafe6-9118-4ae5-abc0-ee5b9a9e9fd6",
          updatedBy: "fe2aafe6-9118-4ae5-abc0-ee5b9a9e9fd6"
        },
        {
          id: "d97e0af5-2728-4ce3-ba7f-9d83a0837db6",
          plate: "YHD-4104",
          manufacture: "Lincoln",
          model: "Navigator",
          image: "https://i.ibb.co/q1f9Z5F/car08-min.jpg",
          rentPerDay: 300000,
          capacity: 2,
          description: " XM satellite radio receiver -inc: 90 day trial subscription. Dual front illuminated visor vanity mirrors.",
          availableAt: "2024-01-29T07:00:05.563Z",
          transmission: "Manual",
          available: true,
          type: "Regular Cab Pickup",
          year: 2014,
          options: [
            "Fog Lights",
            "Memory Seats",
            "Rear Window Defroster",
            "Integrated Phone",
            "Power Locks",
            "A/C: Rear"
          ],
          specs: [
            "XM satellite radio receiver -inc: 90 day trial subscription",
            "Dual front illuminated visor vanity mirrors",
            "Front door tinted glass",
            "Body color door handles",
            "Chrome bodyside molding"
          ],
          createdBy: "046e5aac-3492-484a-9c2b-c827cdf3b61c",
          updatedBy: "046e5aac-3492-484a-9c2b-c827cdf3b61c"
        },
        {
          id: "0d5de078-a5fc-456b-9487-47eb450a01c6",
          plate: "STL-7347",
          manufacture: "Buick",
          model: "LaCrosse",
          image: "https://i.ibb.co/7knp5jW/car09-min.jpg",
          rentPerDay: 1000000,
          capacity: 6,
          description: " Rear reading & courtesy lamps. Zone body construction -inc: front/rear crumple zones, hood deformation point.",
          availableAt: "2024-01-29T06:49:05.563Z",
          transmission: "Automatic",
          available: false,
          type: "Extended Cab Pickup",
          year: 2012,
          options: [
            "CD (Multi Disc)",
            "Keyless Entry",
            "Cassette Player",
            "Power Windows",
            "Rear Window Wiper",
            "CD (Single Disc)",
            "Third Row Seats"
          ],
          specs: [
            "Rear reading & courtesy lamps",
            "Zone body construction -inc: front/rear crumple zones, hood deformation point",
            "4-wheel/4-channel anti-lock brake system (ABS)",
            "Anti-lock 4-wheel performance disc brakes",
            "200mm front axle",
            "Dual front knee airbags"
          ],
          createdBy: "046e5aac-3492-484a-9c2b-c827cdf3b61c",
          updatedBy: "046e5aac-3492-484a-9c2b-c827cdf3b61c"
        },
        {
          id: "6dfa349e-631c-46c0-a037-5c73902ff738",
          plate: "TJW-7622",
          manufacture: "BMW",
          model: "X5",
          image: "https://i.ibb.co/WzZcXvL/car10-min.jpg",
          rentPerDay: 300000,
          capacity: 6,
          description: " Cargo compartment lamp. Body color fascias w/bright insert. Front/rear stabilizer bars.",
          availableAt: "2024-01-30T08:30:05.563Z",
          transmission: "Manual",
          available: true,
          type: "Hatchback",
          year: 2019,
          options: [
            "Third Row Seats",
            "Bucket Seats",
            "Integrated Phone",
            "Navigation",
            "Leather Interior"
          ],
          specs: [
            "Cargo compartment lamp",
            "Body color fascias w/bright insert",
            "Front/rear stabilizer bars",
            "Electrochromic pwr folding heated mirrors w/memory -inc: puddle lamps, integrated turn signals, auto reverse tilt-down",
            "Multi-info display -inc: driving range, average MPG, current MPG, average speed, outside temp, elapsed time, maintenance & diagnostic messages"
          ],
          createdBy: "046e5aac-3492-484a-9c2b-c827cdf3b61c",
          updatedBy: "046e5aac-3492-484a-9c2b-c827cdf3b61c"
        }
    ]

    // Inserts seed entries
    await knex(tableName).insert(
        cars.map(({ id, ...restData }) => {
          return {
            ...restData,
            specs: JSON.stringify(restData.specs),
            options: JSON.stringify(restData.options),
          };
        })
    );
};
