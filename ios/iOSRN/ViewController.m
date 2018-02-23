//
//  ViewController.m
//  iOSRN
//
//  Created by 刘光强 on 2018/2/22.
//  Copyright © 2018年 刘光强. All rights reserved.
//

#import "ViewController.h"
#import "RNMeModuleVC.h"
#import "RNShopModuleVC.h"
#import "RNOrderModuleVC.h"
@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view, typically from a nib.
    
    self.view.backgroundColor = [UIColor whiteColor];
}

- (IBAction)pushMe:(id)sender {
    RNMeModuleVC *VC = [[RNMeModuleVC alloc] init];
    [self.navigationController pushViewController:VC animated:YES];
}

- (IBAction)pushOrder:(id)sender {
    RNOrderModuleVC *VC = [[RNOrderModuleVC alloc] init];
    [self.navigationController pushViewController:VC animated:YES];
}

- (IBAction)pushShop:(id)sender {
    RNShopModuleVC *VC = [[RNShopModuleVC alloc] init];
    [self.navigationController pushViewController:VC animated:YES];
}
@end
