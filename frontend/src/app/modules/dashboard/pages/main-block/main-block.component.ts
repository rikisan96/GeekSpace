import { Component } from '@angular/core';
import { NftSingleCardComponent } from '../../components/nft/nft-single-card/nft-single-card.component';
import { Nft } from '../../models/nft';

@Component({
  selector: 'app-main-block',
  templateUrl: './main-block.component.html',
  standalone: true,
  imports: [
      NftSingleCardComponent
  ]
})
export class MainBlockComponent {

}
// per standalone component
// export class MainBlockComponent implements OnInit {
//   product: Array<Products>
// }
