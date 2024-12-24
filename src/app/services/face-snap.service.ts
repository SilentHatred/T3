import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap";

@Injectable({
    providedIn: "root"
})

export class FaceSnapsService {
    private faceSnaps: FaceSnap[] = [
        new FaceSnap(
            "PB2 bases be like",
            "Silent Hatred",
            new Date(),
            122140,
            'assets/images/00012546.jpg',
            true),
        new FaceSnap(
            "My honest reaction to the information you've given to me",
            "Kakyoin",
            new Date(),
            54,
            'assets/images/3.png',
            true).withLocation("California"),
        new FaceSnap(
            "Mon meilleur ami depuis toujours !",
            "Archibald",
            new Date(),
            14,
            "https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg",
            false),
        new FaceSnap(
            "Un endroit magnifique pour les randonnées.",
            "Exploration Forever",
            new Date(),
            1659,
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg",
            false).withLocation("Australia"),
        new FaceSnap(
            "Un bon repas",
            "Mariame",
            new Date(),
            2654,
            "https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg",
            true)
    ];

    getFaceSnaps(): FaceSnap[] {
        return this.faceSnaps;
    }
}