
// veroView.cpp : implementation of the CveroView class
//

#include "stdafx.h"
// SHARED_HANDLERS can be defined in an ATL project implementing preview, thumbnail
// and search filter handlers and allows sharing of document code with that project.
#ifndef SHARED_HANDLERS
#include "vero.h"
#endif

#include "veroDoc.h"
#include "veroView.h"

#ifdef _DEBUG
#define new DEBUG_NEW
#endif


// CveroView

IMPLEMENT_DYNCREATE(CveroView, CView)

BEGIN_MESSAGE_MAP(CveroView, CView)
	// Standard printing commands
	ON_COMMAND(ID_FILE_PRINT, &CView::OnFilePrint)
	ON_COMMAND(ID_FILE_PRINT_DIRECT, &CView::OnFilePrint)
	ON_COMMAND(ID_FILE_PRINT_PREVIEW, &CView::OnFilePrintPreview)
END_MESSAGE_MAP()

// CveroView construction/destruction

CveroView::CveroView()
{
	// TODO: add construction code here

}

CveroView::~CveroView()
{
}

BOOL CveroView::PreCreateWindow(CREATESTRUCT& cs)
{
	// TODO: Modify the Window class or styles here by modifying
	//  the CREATESTRUCT cs

	return CView::PreCreateWindow(cs);
}

// CveroView drawing

void CveroView::OnDraw(CDC* /*pDC*/)
{
	CveroDoc* pDoc = GetDocument();
	ASSERT_VALID(pDoc);
	if (!pDoc)
		return;

	// TODO: add draw code for native data here
}


// CveroView printing

BOOL CveroView::OnPreparePrinting(CPrintInfo* pInfo)
{
	// default preparation
	return DoPreparePrinting(pInfo);
}

void CveroView::OnBeginPrinting(CDC* /*pDC*/, CPrintInfo* /*pInfo*/)
{
	// TODO: add extra initialization before printing
}

void CveroView::OnEndPrinting(CDC* /*pDC*/, CPrintInfo* /*pInfo*/)
{
	// TODO: add cleanup after printing
}


// CveroView diagnostics

#ifdef _DEBUG
void CveroView::AssertValid() const
{
	CView::AssertValid();
}

void CveroView::Dump(CDumpContext& dc) const
{
	CView::Dump(dc);
}

CveroDoc* CveroView::GetDocument() const // non-debug version is inline
{
	ASSERT(m_pDocument->IsKindOf(RUNTIME_CLASS(CveroDoc)));
	return (CveroDoc*)m_pDocument;
}
#endif //_DEBUG


// CveroView message handlers
