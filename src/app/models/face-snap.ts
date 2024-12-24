export class FaceSnap {
    location?: string;
    title!: string;
    description!: string;
    createdAt!: Date;
    like!: number;
    imageUrl!: string;
    LikeButtonText!: string;
    userLiked!: boolean;

    constructor(title: string, description: string, createdAt: Date, like: number, imageUrl: string, userLiked: boolean) {
        this.title = title;
        this.description = description;
        this.createdAt = createdAt;
        this.like = like;
        this.imageUrl = imageUrl;
        this.userLiked = userLiked;
        this.LikeButtonState();
    }

    onLike(): void {
        if (this.userLiked) {
            this.like--;
            this.userLiked = false;
        } else {
            this.like++;
            this.userLiked = true;
        }
        this.LikeButtonState();
    }

    LikeButtonState(): void {
        if (this.userLiked) { this.LikeButtonText = "Unlike"; }
        else { this.LikeButtonText = "Like !"; }
    }

    setLocation(location: string): void {
        this.location = location;
    }

    withLocation(location: string): FaceSnap {
        this.setLocation(location);
        return this;
    }
}