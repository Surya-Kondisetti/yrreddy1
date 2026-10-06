import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [

    // Medical Instruments

    { "id": 1, "name": "Baby Warmer", "category": "Medical Instruments", "price": 130, "imageUrl": "../../assets/yrreddygroup/medical instruments/500x500/baby warmer.png" },
    { "id": 2, "name": "Blood Sample Mixer", "category": "Medical Instruments", "price": 130, "imageUrl": "../../assets/yrreddygroup/medical instruments/500x500/blood sample mixer.png" },
    { "id": 3, "name": "BP Machines Diamond Company", "category": "Medical Instruments", "price": 130, "imageUrl": "../../assets/yrreddygroup/medical instruments/500x500/bp machines diamond company.png" },
    { "id": 4, "name": "Electro Surgical Unit", "category": "Medical Instruments", "price": 130, "imageUrl": "../../assets/yrreddygroup/medical instruments/500x500/electro surgical unit.png" },
    { "id": 5, "name": "Erba Chem7", "category": "Medical Instruments", "price": 130, "imageUrl": "../../assets/yrreddygroup/medical instruments/500x500/erba chem7.png" },
    { "id": 6, "name": "Erba ECL 105", "category": "Medical Instruments", "price": 130, "imageUrl": "../../assets/yrreddygroup/medical instruments/500x500/erba ecl 105.png" },
    { "id": 7, "name": "H360-3", "category": "Medical Instruments", "price": 130, "imageUrl": "../../assets/yrreddygroup/medical instruments/500x500/H360-3.png" },
    { "id": 8, "name": "Infant Vein Finder", "category": "Medical Instruments", "price": 130, "imageUrl": "../../assets/yrreddygroup/medical instruments/500x500/infant vein finder.png" },
    { "id": 9, "name": "Infusion Pump", "category": "Medical Instruments", "price": 130, "imageUrl": "../../assets/yrreddygroup/medical instruments/500x500/infusion pump.png" },
    { "id": 10, "name": "Oxygen Concentrator", "category": "Medical Instruments", "price": 130, "imageUrl": "../../assets/yrreddygroup/medical instruments/500x500/oxygen concentrator.png" },
    { "id": 11, "name": "Patient Monitor", "category": "Medical Instruments", "price": 130, "imageUrl": "../../assets/yrreddygroup/medical instruments/500x500/patient monitor.png" },
    { "id": 12, "name": "Remi Centrifuge", "category": "Medical Instruments", "price": 130, "imageUrl": "../../assets/yrreddygroup/medical instruments/500x500/remi centrifuge.png" },
    { "id": 13, "name": "Steriliser", "category": "Medical Instruments", "price": 130, "imageUrl": "../../assets/yrreddygroup/medical instruments/500x500/steriliser.png" },
    { "id": 14, "name": "Syringe Pump", "category": "Medical Instruments", "price": 130, "imageUrl": "../../assets/yrreddygroup/medical instruments/500x500/syringe pump.png" },

    //healthcare furniture

    { "id": 15, "name": "Bedside Locker", "category": "Healthcare Furniture", "price": 130, "imageUrl": "../../assets/yrreddygroup/health care furniture/500x500/bed side locker.png" },
    { "id": 16, "name": "Cardiac Table - Gear Model", "category": "Healthcare Furniture", "price": 130, "imageUrl": "../../assets/yrreddygroup/health care furniture/500x500/cardiac table gear model.png" },
    { "id": 17, "name": "Cardiac Table - Hydraulic Model", "category": "Healthcare Furniture", "price": 130, "imageUrl": "../../assets/yrreddygroup/health care furniture/500x500/cardiac table hydraulic model.png" },
    { "id": 18, "name": "Drug Trolley", "category": "Healthcare Furniture", "price": 130, "imageUrl": "../../assets/yrreddygroup/health care furniture/500x500/drug trolley.png" },
    { "id": 19, "name": "ECG Trolley", "category": "Healthcare Furniture", "price": 130, "imageUrl": "../../assets/yrreddygroup/health care furniture/500x500/ecg torlley.png" },
    { "id": 20, "name": "Examination Couch", "category": "Healthcare Furniture", "price": 130, "imageUrl": "../../assets/yrreddygroup/health care furniture/500x500/examination couch own brand.png" },
    { "id": 21, "name": "Hospital Footsteps", "category": "Healthcare Furniture", "price": 130, "imageUrl": "../../assets/yrreddygroup/health care furniture/500x500/hospital single and double footstep.png" },
    { "id": 22, "name": "ICU Beds", "category": "Healthcare Furniture", "price": 130, "imageUrl": "../../assets/yrreddygroup/health care furniture/500x500/icu beds.png" },
    { "id": 23, "name": "ICU Motorized Bed", "category": "Healthcare Furniture", "price": 130, "imageUrl": "../../assets/yrreddygroup/health care furniture/500x500/icu motorized bed.png" },
    { "id": 24, "name": "Instrument Trolley", "category": "Healthcare Furniture", "price": 130, "imageUrl": "../../assets/yrreddygroup/health care furniture/500x500/instrument trolley.png" },
    { "id": 25, "name": "Labour Table", "category": "Healthcare Furniture", "price": 130, "imageUrl": "../../assets/yrreddygroup/health care furniture/500x500/labour table general bed.png" },
    { "id": 26, "name": "Linen Trolley", "category": "Healthcare Furniture", "price": 130, "imageUrl": "../../assets/yrreddygroup/health care furniture/500x500/lenin trolley.png" },
    { "id": 27, "name": "Oxygen Cylinder Trolley", "category": "Healthcare Furniture", "price": 130, "imageUrl": "../../assets/yrreddygroup/health care furniture/500x500/oxygen cylinder trolley.png" },
    { "id": 28, "name": "Revolving Stool", "category": "Healthcare Furniture", "price": 130, "imageUrl": "../../assets/yrreddygroup/health care furniture/500x500/revolving stool.png" },
    { "id": 29, "name": "Saline Stand", "category": "Healthcare Furniture", "price": 130, "imageUrl": "../../assets/yrreddygroup/health care furniture/500x500/saline stand.png" },
    { "id": 30, "name": "Scrub Sink", "category": "Healthcare Furniture", "price": 130, "imageUrl": "../../assets/yrreddygroup/health care furniture/500x500/srub slink.png" },
    { "id": 31, "name": "Crash Cart Trolley", "category": "Healthcare Furniture", "price": 130, "imageUrl": "../../assets/yrreddygroup/health care furniture/500x500/ss crash cart trolley.png" },
    { "id": 32, "name": "Stretcher Trolley", "category": "Healthcare Furniture", "price": 130, "imageUrl": "../../assets/yrreddygroup/health care furniture/500x500/stretcher trolley.png" },
    { "id": 33, "name": "Visitor Stool", "category": "Healthcare Furniture", "price": 130, "imageUrl": "../../assets/yrreddygroup/health care furniture/500x500/viditor stool.png" },
    { "id": 34, "name": "Ward Beds", "category": "Healthcare Furniture", "price": 130, "imageUrl": "../../assets/yrreddygroup/health care furniture/500x500/ward beds.png" },
    { "id": 35, "name": "Wheelchair", "category": "Healthcare Furniture", "price": 130, "imageUrl": "../../assets/yrreddygroup/health care furniture/500x500/wheel cahir.png" },

    //consumbles
    { "id": 36, "name": "96 Deep Well Plate", "category": "Consumables and disposable", "price": 130, "imageUrl": "../../assets/yrreddygroup/consumbles/500x500/96 deep well plate.png" },
    { "id": 37, "name": "Adhesive for Removal", "category": "Consumables and disposable", "price": 130, "imageUrl": "../../assets/yrreddygroup/consumbles/500x500/adhesive for the removal.png" },
    { "id": 38, "name": "Bandages", "category": "Consumables and disposable", "price": 130, "imageUrl": "../../assets/yrreddygroup/consumbles/500x500/bandages.png" },
    { "id": 39, "name": "Breathing Circuits", "category": "Consumables and disposable", "price": 130, "imageUrl": "../../assets/yrreddygroup/consumbles/500x500/breathing circuits.png" },
    { "id": 40, "name": "Catheter Set", "category": "Consumables and disposable", "price": 130, "imageUrl": "../../assets/yrreddygroup/consumbles/500x500/catheter set.png" },
    { "id": 41, "name": "Chemical Cleaner", "category": "Consumables and disposable", "price": 130, "imageUrl": "../../assets/yrreddygroup/consumbles/500x500/chemical cleaner.png" },
    { "id": 42, "name": "Clamps", "category": "Consumables and disposable", "price": 130, "imageUrl": "../../assets/yrreddygroup/consumbles/500x500/clamps.png" },
    { "id": 43, "name": "Crystalloid Solution", "category": "Consumables and disposable", "price": 130, "imageUrl": "../../assets/yrreddygroup/consumbles/500x500/crystalloid solution.png" },
    { "id": 44, "name": "Dental Chair Accessories", "category": "Consumables and disposable", "price": 130, "imageUrl": "../../assets/yrreddygroup/consumbles/500x500/dental chair accessories.png" },
    { "id": 45, "name": "Dental Floss", "category": "Consumables and disposable", "price": 130, "imageUrl": "../../assets/yrreddygroup/consumbles/500x500/dental floss.png" },
    { "id": 46, "name": "Dental Hygiene Kits", "category": "Consumables and disposable", "price": 130, "imageUrl": "../../assets/yrreddygroup/consumbles/500x500/dental hygiens kits.png" },
    { "id": 47, "name": "Disposable Sampling Tube", "category": "Consumables and disposable", "price": 130, "imageUrl": "../../assets/yrreddygroup/consumbles/500x500/disposable sampling tube.png" },
    { "id": 48, "name": "Electrode", "category": "Consumables and disposable", "price": 130, "imageUrl": "../../assets/yrreddygroup/consumbles/500x500/electrode.png" },
    { "id": 49, "name": "Electroporation Cuvettes", "category": "Consumables and disposable", "price": 130, "imageUrl": "../../assets/yrreddygroup/consumbles/500x500/electroporation cuvettes.png" },
    { "id": 50, "name": "Epidural Kits", "category": "Consumables and disposable", "price": 130, "imageUrl": "../../assets/yrreddygroup/consumbles/500x500/epidural kits.png" },
    { "id": 51, "name": "Forceps", "category": "Consumables and disposable", "price": 130, "imageUrl": "../../assets/yrreddygroup/consumbles/500x500/forceps.png" },
    { "id": 52, "name": "Gauze", "category": "Consumables and disposable", "price": 130, "imageUrl": "../../assets/yrreddygroup/consumbles/500x500/gauze.png" },
    { "id": 53, "name": "Hospital Tray", "category": "Consumables and disposable", "price": 130, "imageUrl": "../../assets/yrreddygroup/consumbles/500x500/hospital tray.png" },
    { "id": 54, "name": "Hyperinflation Bags", "category": "Consumables and disposable", "price": 130, "imageUrl": "../../assets/yrreddygroup/consumbles/500x500/hyperinfaltion bags.png" },
    { "id": 55, "name": "Injection Needles", "category": "Consumables and disposable", "price": 130, "imageUrl": "../../assets/yrreddygroup/consumbles/500x500/injection needles.png" },
    { "id": 56, "name": "Irrigation Trays", "category": "Consumables and disposable", "price": 130, "imageUrl": "../../assets/yrreddygroup/consumbles/500x500/irrigation trays.png" },
    { "id": 57, "name": "IV Bags", "category": "Consumables and disposable", "price": 130, "imageUrl": "../../assets/yrreddygroup/consumbles/500x500/iv bags.png" },
    { "id": 58, "name": "IV Infusion Set", "category": "Consumables and disposable", "price": 130, "imageUrl": "../../assets/yrreddygroup/consumbles/500x500/iv infusion set.png" },
    { "id": 59, "name": "Laparoscopic Instruments", "category": "Consumables and disposable", "price": 130, "imageUrl": "../../assets/yrreddygroup/consumbles/500x500/laparoscopic instruments.png" },
    { "id": 60, "name": "LMAs", "category": "Consumables and disposable", "price": 130, "imageUrl": "../../assets/yrreddygroup/consumbles/500x500/LMAS.png" },
    { "id": 61, "name": "Masks", "category": "Consumables and disposable", "price": 130, "imageUrl": "../../assets/yrreddygroup/consumbles/500x500/masks.png" },
    { "id": 62, "name": "Medical Laboratory Supply", "category": "Consumables and disposable", "price": 130, "imageUrl": "../../assets/yrreddygroup/consumbles/500x500/medical laboratory supply.png" },
    { "id": 63, "name": "Medical Scales", "category": "Consumables and disposable", "price": 130, "imageUrl": "../../assets/yrreddygroup/consumbles/500x500/medical scales.png" },
    { "id": 64, "name": "Microtainers", "category": "Consumables and disposable", "price": 130, "imageUrl": "../../assets/yrreddygroup/consumbles/500x500/microtainers.png" },
    { "id": 65, "name": "Monitor Set", "category": "Consumables and disposable", "price": 130, "imageUrl": "../../assets/yrreddygroup/consumbles/500x500/monitor set.png" },
    { "id": 66, "name": "Plastic Foil", "category": "Consumables and disposable", "price": 130, "imageUrl": "../../assets/yrreddygroup/consumbles/500x500/platic foil.png" },
    { "id": 67, "name": "Rapid Antigen Test", "category": "Consumables and disposable", "price": 130, "imageUrl": "../../assets/yrreddygroup/consumbles/500x500/rapid antigen test.png" },
    { "id": 68, "name": "Scissors", "category": "Consumables and disposable", "price": 130, "imageUrl": "../../assets/yrreddygroup/consumbles/500x500/scissors.png" },
    { "id": 69, "name": "Staples", "category": "Consumables and disposable", "price": 130, "imageUrl": "../../assets/yrreddygroup/consumbles/500x500/staples.png" },
    { "id": 70, "name": "Stethoscopes", "category": "Consumables and disposable", "price": 130, "imageUrl": "../../assets/yrreddygroup/consumbles/500x500/stethoscopes.png" },
    { "id": 71, "name": "Suction", "category": "Consumables and disposable", "price": 130, "imageUrl": "../../assets/yrreddygroup/consumbles/500x500/suction.png" },
    { "id": 72, "name": "Suctioning Catheters", "category": "Consumables and disposable", "price": 130, "imageUrl": "../../assets/yrreddygroup/consumbles/500x500/suctioning catheters.png" },
    { "id": 73, "name": "Surgical Bales", "category": "Consumables and disposable", "price": 130, "imageUrl": "../../assets/yrreddygroup/consumbles/500x500/surgical bales.png" },
    { "id": 74, "name": "Surgical Tools", "category": "Consumables and disposable", "price": 130, "imageUrl": "../../assets/yrreddygroup/consumbles/500x500/surgical tools.png" },
    { "id": 75, "name": "Syringes", "category": "Consumables and disposable", "price": 130, "imageUrl": "../../assets/yrreddygroup/consumbles/500x500/syringes.png" },
    { "id": 76, "name": "Tape", "category": "Consumables and disposable", "price": 130, "imageUrl": "../../assets/yrreddygroup/consumbles/500x500/tape.png" },
    { "id": 77, "name": "Tooth Whitening Trays", "category": "Consumables and disposable", "price": 130, "imageUrl": "../../assets/yrreddygroup/consumbles/500x500/tooth whitening trays.png" },
    { "id": 78, "name": "Tourniquets", "category": "Consumables and disposable", "price": 130, "imageUrl": "../../assets/yrreddygroup/consumbles/500x500/tourniquets.png" },
    { "id": 79, "name": "Undiluted Disinfectant", "category": "Consumables and disposable", "price": 130, "imageUrl": "../../assets/yrreddygroup/consumbles/500x500/undiluted disinfectant.png" },
    { "id": 80, "name": "Wound Evacuators", "category": "Consumables and disposable", "price": 130, "imageUrl": "../../assets/yrreddygroup/consumbles/500x500/wound evacuators.png" },
    { "id": 81, "name": "Yankauers", "category": "Consumables and disposable", "price": 130, "imageUrl": "../../assets/yrreddygroup/consumbles/500x500/yankauers.png" },
    { "id": 82, "name": "BMW Bins", "category": "Consumables and disposable", "price": 130, "imageUrl": "../../assets/yrreddygroup/disposals/500x500/bmw bins.png" },
    { "id": 83, "name": "Garbage Bags", "category": "Consumables and disposable", "price": 130, "imageUrl": "../../assets/yrreddygroup/disposals/500x500/garbagebags.png" },
    { "id": 84, "name": "Hypodermic Needles", "category": "Consumables and disposable", "price": 130, "imageUrl": "../../assets/yrreddygroup/disposals/500x500/hypodermic needles.png" },
    { "id": 85, "name": "Infusion Disposals", "category": "Consumables and disposable", "price": 130, "imageUrl": "../../assets/yrreddygroup/disposals/500x500/infusion disposals.png" },
    { "id": 86, "name": "Minor Procedure Sets", "category": "Consumables and disposable", "price": 130, "imageUrl": "../../assets/yrreddygroup/disposals/500x500/minor procedure sets.png" },
    { "id": 87, "name": "Paper Rolls", "category": "Consumables and disposable", "price": 130, "imageUrl": "../../assets/yrreddygroup/disposals/500x500/paper rolls.png" },
    { "id": 88, "name": "Plastic Protective Apparel", "category": "Consumables and disposable", "price": 130, "imageUrl": "../../assets/yrreddygroup/disposals/500x500/plastic protective apparel.png" },
    { "id": 89, "name": "Plastic Scissors", "category": "Consumables and disposable", "price": 130, "imageUrl": "../../assets/yrreddygroup/disposals/500x500/plastic scissors.png" },
    { "id": 90, "name": "Plastic Sponge Holder", "category": "Consumables and disposable", "price": 130, "imageUrl": "../../assets/yrreddygroup/disposals/500x500/platic sponge holder.png" },
    { "id": 91, "name": "Surgical Medical Hand Gloves", "category": "Consumables and disposable", "price": 130, "imageUrl": "../../assets/yrreddygroup/disposals/500x500/surgical medical handgloves.png" },


    //Dental

    { "id": 91, "name": "Surgical Medical Hand Gloves", "category": "Dental", "price": 130, "imageUrl": "../../assets/yrreddygroup/500x500 (1)/ Intraoral Camera.png" },
    { "id": 91, "name": "Surgical Medical Hand Gloves", "category": "Dental", "price": 130, "imageUrl": "../../assets/yrreddygroup/500x500 (1)/air compressor.png" },
    { "id": 91, "name": "Surgical Medical Hand Gloves", "category": "Dental", "price": 130, "imageUrl": "../../assets/yrreddygroup/500x500 (1)/Built-in Curing Lights.png" },
    { "id": 91, "name": "Surgical Medical Hand Gloves", "category": "Dental", "price": 130, "imageUrl": "../../assets/yrreddygroup/500x500 (1)/Dental Chair.png" },
    { "id": 91, "name": "Surgical Medical Hand Gloves", "category": "Dental", "price": 130, "imageUrl": "../../assets/yrreddygroup/500x500 (1)/dental stool_.png" },
    { "id": 91, "name": "Surgical Medical Hand Gloves", "category": "Dental", "price": 130, "imageUrl": "../../assets/yrreddygroup/500x500 (1)/high and low hand pieces.png" },
    { "id": 91, "name": "Surgical Medical Hand Gloves", "category": "Dental", "price": 130, "imageUrl": "../../assets/yrreddygroup/500x500 (1)/teeth whitening unit.png" },
    { "id": 91, "name": "Surgical Medical Hand Gloves", "category": "Dental", "price": 130, "imageUrl": "../../assets/yrreddygroup/500x500 (1)/Ultrasonic Scaler.png" },

  ];


  private categories: Category[] = [
    { name: 'Medical Instruments' },
    { name: 'Healthcare Furniture' },
    { name: 'Consumables and disposable' },
    { name: 'Dental' }
  ];

  getProducts(): Product[] {
    return this.products;
  }

  getCategories(): Category[] {
    return this.categories;
  }


  sortProductsByPrice(order: 'asc' | 'desc'): Product[] {
    return this.products.sort((a, b) => {
      if (order === 'asc') {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
  }
  filterProductsByCategory(category: string): Product[] {
    if (category === 'All Products') {
      return this.products;
    }
    return this.products.filter(product => product.category === category);
  }
}
