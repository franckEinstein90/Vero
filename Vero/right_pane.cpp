// right_pane.cpp : implementation file
//

#include "stdafx.h"
#include "vero.h"
#include "right_pane.h"


// right_pane

IMPLEMENT_DYNCREATE(right_pane, CFormView)

right_pane::right_pane()
	: CFormView(IDD_FORMVIEW1)
{

}

right_pane::~right_pane()
{
}

void right_pane::DoDataExchange(CDataExchange* pDX)
{
	CFormView::DoDataExchange(pDX);
}

BEGIN_MESSAGE_MAP(right_pane, CFormView)
END_MESSAGE_MAP()


// right_pane diagnostics

#ifdef _DEBUG
void right_pane::AssertValid() const
{
	CFormView::AssertValid();
}

#ifndef _WIN32_WCE
void right_pane::Dump(CDumpContext& dc) const
{
	CFormView::Dump(dc);
}
#endif
#endif //_DEBUG


// right_pane message handlers
