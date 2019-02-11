import { Component, OnInit, Inject, Input, EventEmitter, Output} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DialogData } from '../class/dialog-data';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Post } from '../class/post';
import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { LocationService } from '../services/location.service';
import { DataService } from '../services/data.service';
import { AuthService } from '../services/auth/auth.service';
import { UserProfile } from '../class/user-profile';


class newPost {
  caption: string;
  likes:string;
  keywords: string;
  image: string; 
  long: number;
  lat: number;
  date: string;
  uid: string;
  userName: string;
  shareLink: string;
}

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {
  @Output() doneAddingPost = new EventEmitter();
  productList : any;
  newPost: Post;
  fileToUpload: File;
  imageUrl: string = null; 
  location; 
  data;
  profileUser;
  canSend = true;

  categories = [
    "Wigs", "Natural Hair", "Protective Styling"
  ];

  brandList = [
    "Mane Choice", "Shea Moisture", "Janet Collection", "Other"
  ]
  constructor(
    private router: Router,
    private afs: AngularFirestore, 
    private db: AngularFireDatabase, 
    private locationService: LocationService,
    private dataService: DataService, 
    private auth: AuthService,
    private userProfile: UserProfile
  ) {
    }
    
    ngOnInit() {
      this.locationService.getCurrentLocation((pos) => {
        this.location = pos;
        this.canSend;
      });
  
      this.location = this.locationService.location;
     
      
      // console.log('this is the location attribute', this.location);
      // this.productList = this.db.list('/products');
      // const product = this.db.list<Post>('/products');
      this.profileUser = this.auth.getCurrentUser();             
    }

  cancel() {
    this.doneAddingPost.emit({update: false})
  }

  done() {
    if(this.location && this.location.long & this.location.lat) {
      this.newPost.uid = this.profileUser.uid
      this.newPost.long = this.location.long;
      this.newPost.lat = this.location.lat;
      this.newPost.date = new Date().toISOString();
      // this.productList.push(this.newPost);
      this.canSend = false;
      this.data = this.dataService.addPost(this.newPost)
        .subscribe((prod) => {
          this.canSend = true;
          this.doneAddingPost.emit({update: false});
        }, (err) => {
          console.log('there was an error');
        })
    } 
    
  }

  onFileSelected(file: FileList) {
    this.fileToUpload = file.item(0);
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
      this.newPost.image = this.imageUrl;
    }
    reader.readAsDataURL(this.fileToUpload);
  }

}
