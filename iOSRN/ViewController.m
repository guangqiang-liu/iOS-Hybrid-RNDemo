//
//  ViewController.m
//  iOSRN
//
//  Created by 刘光强 on 2018/2/22.
//  Copyright © 2018年 刘光强. All rights reserved.
//

#import "ViewController.h"
#import "RNViewController.h"

@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view, typically from a nib.
    
    self.view.backgroundColor = [UIColor whiteColor];
}

- (IBAction)pushMe:(id)sender {
    RNViewController *VC = [[RNViewController alloc] init];
    [self.navigationController pushViewController:VC animated:YES];
}

- (IBAction)pushOrder:(id)sender {
    RNViewController *VC = [[RNViewController alloc] init];
    [self.navigationController pushViewController:VC animated:YES];
}

- (IBAction)pushShop:(id)sender {
    RNViewController *VC = [[RNViewController alloc] init];
    [self.navigationController pushViewController:VC animated:YES];
}
@end
